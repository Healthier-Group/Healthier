const router = require("express").Router();
const express = require("express");
const passport = require("passport");
const {User, Order, Orderproduct} = require("../db")
const {isLogedIn, isLogedAsAdmin} = require("../middlewares")

router.use(express.json());

router.post("/login", (req, res, next) => {
    passport.authenticate("local",{session:true}, (err, user, info) => {
        if (err) throw err;
        if (!user) res.send("No User Exists");
        else {
            req.logIn(user, (err) => {
                if (err) throw err;
                res.send("Successfully Authenticated");
            });
        }
    })(req, res, next);
});

router.get("/login/google",
    passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get( "/google/redirect", passport.authenticate("google", 
{ failureMessage: "Cannot login to Google, please try again later!"}),
    (req, res) => {
        res.send("Thank you for signing in!");
    }
);

router.get('/logout', (req, res, next) => {
    req.logOut();
    req.session = null;
    res.json("logged out");
})

router.get("/user", isLogedIn, async(req, res) => {
    try {
        const idUser = req.user.id
		const user = await User.findOne({
            where: {id: idUser},
            include: [{
                    model: Order,
                    include: [Orderproduct]
            }]
		});
		res.json(user);
	} catch (err) {
		res.json(err.message);
		return console.log(err);
	}
});

module.exports = router;
