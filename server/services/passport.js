/**
 * Passport config
 * @type {config|Passport}
 */

const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');

const KEYS = require('../config/keys');

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id)
        .then(user => {
            done(null, user);
        });
});

passport.use(
    new GoogleStrategy(
        {
            clientID: KEYS.GOOGLE_CLIENT_ID,
            clientSecret: KEYS.GOOGLE_CLIENT_SECRET,
            callbackURL: '/auth/google/callback'
        },
        async (accessToken, refreshToken, profile, done) => {
            const existingUser = await User.findOne({googleId: profile.id});
            if (existingUser) {
                // Existing user then done
                done(null, existingUser)
            } else {
                // Not existing user then save it to db then done
                const user = await new User({googleId: profile.id, emails: profile.emails}).save();

                done(null, user);
            }
        }
    )
);
