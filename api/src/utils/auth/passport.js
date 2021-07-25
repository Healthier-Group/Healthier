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
      email = email.toLowerCase()
      user = await User.findOne({where:{ email: email }})
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
  cb(null, user.id);
});

passport.deserializeUser(async (id, cb) => {
  try{
    const user = await User.findOne({ where: { id } })
    if (user) cb(null, user);
  }catch(e){
    cb(err, null);
  }
});