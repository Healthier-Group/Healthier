const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

const {User} = require("../../db");

const {GOOGLE_CLIENT_ID, GOOGLE_SECRET_KEY, GOOGLE_CALLBACK_URL} = process.env

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_SECRET_KEY,
      callbackURL: GOOGLE_CALLBACK_URL,
      passReqToCallback: true,
    },
    async (req, accessToken, refreshToken, profile, cb) => {
      const defaultUser = {
        name: `${profile.name.givenName} ${profile.name.familyName}`,
        username: profile.emails[0].value.split("@")[0].replace(/([^A-Za-z0-9]+)/gi, ''),
        email: profile.emails[0].value,
        password: profile.id,
        googleId: profile.id,
      };

      console.log("DEFAULT USERNAME",defaultUser.username)

      const user = await User.findOrCreate({
        where: { googleId: profile.id },
        defaults: defaultUser,
      }).catch((err) => {
        console.log("Error signing up", err);
        cb(err, null);
      });

      if (user && user[0]) return cb(null, user && user[0]);
    }
  )
);
