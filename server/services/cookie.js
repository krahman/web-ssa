const cookieSession = require('cookie-session');
const KEYS = require('../config/keys');

module.exports = app => {
    app.use(
        cookieSession({
            maxAge: 30 * 24 * 60 * 60 * 1000,
            keys: [KEYS.COOKIE_KEY]
        })
    )
};