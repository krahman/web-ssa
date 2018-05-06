const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');

const KEYS = require('./config/keys');

const PORT = process.env.PORT || 3001;

const app = express();

// Initialize user schema
require('./models/User');

// Initialize passport config
require('./services/passport');

// Initialize cooke session config
require('./services/cookie')(app);

// Initialize passport MW
app.use(passport.initialize());

// Initialize passport session MW
app.use(passport.session());

// Initialize server app routers
require('./routes/auth')(app);

// Initialize mongodb connection
mongoose.connect(KEYS.MONGO_URI);

// Initialize server application
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
