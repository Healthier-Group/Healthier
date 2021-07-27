const router = require("express").Router();
const express = require("express");
const passport = require("passport");

const {User, Order, Orderproduct} = require("../db")

const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs')

const { transporter } = require("../utils/nodemailer");

const {isLogedIn, isLogedAsAdmin} = require("../middlewares")
const {SECRET_KEY,GMAIL_APP_EMAIL,FRONT} = process.env

router.use(express.json());

router.post('/email', async (req,res,next) => {
    let {email, type} = req.body;
    email = email.toLowerCase()
    let user = User.findOne({where: { email }})
    if(!user) return res.json({error: 'Usuario inexistente'})
    let token = await jwt.sign({email},SECRET_KEY,{expiresIn:'1hr'})
    if(type === 'passwordreset'){
        transporter.sendMail({
            from: `"Healthier" <${GMAIL_APP_EMAIL}>`, // sender address
            to: email, // list of receivers
            subject: "Recuperar Contraseña", // Subject line
            text: "Haga click en el link para restablecer su contraseña: ", // plain text body
            html: `<b>Haga click en el link para restablecer su contraseña: <a href="${FRONT}/verify/password?token=${token}"> AQUÍ </a> </b>`, // html body
        });
        res.json({success: 'Correo enviado'})
    }
    if(type === 'verifyadmin'){
        transporter.sendMail({
            from: `"Healthier" <${GMAIL_APP_EMAIL}>`, // sender address
            to: email, // list of receivers
            subject: "Verificacion en dos pasos", // Subject line
            text: "Haga click en el link para verificar su identidad: ", // plain text body
            html: `<b>Haga click en el link para verificar su identidad: <a href="${FRONT}/verify/admin?token=${token}"> AQUÍ </a> </b>`, // html body
        });
        res.json({success: 'Correo enviado'})
    }
})

router.post('/passwordreset', async (req,res,next) => {
    let {token, newPassword} = req.body;
    try {
        let email = jwt.verify(token,SECRET_KEY).email.toLowerCase()
        console.log("este es email del back:", email)
        let isRegistered = await User.findOne({where: {email: email}})
        if (isRegistered) {
            const hashedPassword = await bcrypt.hash(newPassword, 12)
            await User.update(
                {password: hashedPassword},
                {where: {email: email}}
            )
            return res.json({success: 'Usuario actualizado'})
        }else{
            return res.json({error: 'Usuario inexistente'})
        }
    }catch(e) {
        return res.json({error: e.message})
    }
})

router.post('/admin', async (req,res,next) => {
    let {token} = req.body;
    try {
        let email = jwt.verify(token,SECRET_KEY).email.toLowerCase()
        let isAdmin = await User.findOne({where: {email: email, isAdmin: true}})
        isAdmin ? res.json(true) : res.json(false)
    } catch(e) {
        return res.json({error: e.message})
    }
})

router.post("/login", async(req, res, next) => {
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
