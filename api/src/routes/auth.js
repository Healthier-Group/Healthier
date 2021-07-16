const router = require("express").Router();
const express = require("express");
const passport = require("passport");
const {User} = require("../db")
const {isLogedIn, isLogedAsAdmin} = require("../middlewares")

router.use(express.json());

router.post("/login", (req, res, next) => {
    passport.authenticate("local",{session:true}, (err, user, info) => {
        console.log("autenticate local")
        if (err) throw err;
        if (!user) res.send("No User Exists");
        else {
            req.logIn(user, (err) => {
                if (err) throw err;
                res.send("Successfully Authenticated");
                console.log(req.user);
            });
        }
    })(req, res, next);
});

router.get("/login/google",
    passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get(
    "/google/redirect",
    passport.authenticate("google", {
        failureMessage: "Cannot login to Google, please try again later!"
    }),
    (req, res) => {
        res.send("Thank you for signing in!");
    }
);

router.get('/logout', (req, res, next) => {
    console.log("logout")
    req.logOut();
    req.session = null;
    res.json("logged out");
})

router.get("/user", isLogedIn, async(req, res) => {
    try {
		const user = await User.findOne({
		where: {id:req.user.id}
		});
        const {name, username, email, isAdmin, isReseller, isDeleted } = user;
		res.json({name, username, email, isAdmin, isReseller, isDeleted });
	} catch (err) {
		res.json(err.message);
		return console.log(err);
	}
});

module.exports = router;
