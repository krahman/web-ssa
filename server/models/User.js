/**
 * User Model
 * @type {Schema|Mongoose}
 */

const mongoose = require('mongoose');
const {Schema} = mongoose;

const userSchema = new Schema({
    googleId: String,
    emails: {type: Array, default: []}
});

mongoose.model('users', userSchema);