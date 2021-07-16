const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require('bcryptjs');
const {User} = require("../../db");

passport.use(
  new LocalStrategy(
    {
      usernameField: 'email', 
      passwordField: 'password'
    },
    async (email, password, done) => {
      console.log("new local strategy callback")
      user = await User.findOne({where:{ email: email }})
      console.log("user")
      console.log(user)
      if (!user) return done(null, false);
      bcrypt.compare(password, user.password, (err, result) => {
        if (err) throw err;
        if (result === true) {
          return done(null, user);
        } else {
          return done(null, false);
        }
      });
    })
);

passport.serializeUser((user, cb) => {
  console.log("serializeUser", user)
  cb(null, user.id);
});

passport.deserializeUser(async (id, cb) => {
  console.log("deserializeUser", id)
  try{
    const user = await User.findOne({ where: { id } })
    if (user) cb(null, user);
  }catch(e){
    console.log("Error deserializing", err.message);
    cb(err, null);
  }
});