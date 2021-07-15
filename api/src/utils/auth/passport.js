const passport = require("passport");
const passportJwt = require("passport-jwt");
const jwt = require('jsonwebtoken');
const ExtractJwt = passportJwt.ExtractJwt;
const StrategyJwt = passportJwt.Strategy;
const BearerStrategy = require('passport-http-bearer').Strategy;
const LocalStrategy = require("passport-local").Strategy;
const User = require("../../models/User");
const { SECRET_KEY } = process.env

passport.use(
  new StrategyJwt(
    {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: SECRET_KEY,
    },
    function (jwtPayload, done) {
      return User.findOne({ where: { id: jwtPayload.id } })
        .then((user) => {
          return done(null, user);
        })
        .catch((err) => {
          return done(err);
        });
    }
  )
)

passport.use(
  new BearerStrategy((token, done) => {
    jwt.verify(token, SECRET_KEY, function (err, usuario) {
      if (err) return done(err);
      return done(null, usuario ? usuario : false);
    });
  })
);

passport.serializeUser((user, cb) => {
  console.log("Serializing user:", user);
  cb(null, user.id);
});

passport.deserializeUser(async (id, cb) => {
  console.log("deserialize USER")
  const user = await User.findOne({ where: { id } })
  .catch((err) => {
    console.log("Error deserializing", err);
    cb(err, null);
  });
  if (user) cb(null, user);
});