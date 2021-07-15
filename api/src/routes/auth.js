const router = require("express").Router();
const express = require("express");
const passport = require("passport");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs")
const {User} = require("../db")
const {SECRET_KEY} = process.env

router.use(express.json());

router.post("/login", async (req, res) => {
    console.log('/login')
    const { email, password } = req.body;

    const userWithEmail = await User.findOne({ where: { email } })
    .catch(
    (err) => {
        console.log("Error: ", err);
    }
    );

    if (!userWithEmail)
        return res
            .status(400)
            .json({ message: "Email or password does not match!" });
    if (! await bcrypt.compare(password,userWithEmail.password))
        return res
            .status(400)
            .json({ message: "Email or password does not match!" });

    const jwtToken = jwt.sign(
        { id: userWithEmail.id, email: userWithEmail.email },
        SECRET_KEY
    );
    await bcrypt.compare(password,userWithEmail.password) && console.log("autenticado")
    
    res.json({ message: "Welcome Back!", token: jwtToken });
});

router.get('/logout', passport.authenticate("bearer",{session:true}) , (req, res, next) => {
    req.logOut();
    req.session.destroy();
    console.log(req.user)
    res.json("Sesión cerrada exitosamente.")
})

router.get("/user", passport.authenticate("bearer",{session:true}), async(req, res) => {
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
