/**
 * Santa Model
 * @type {Schema|Mongoose}
 */

const mongoose = require('mongoose');
const {Schema} = mongoose;

const santaSchema = new Schema({
    name: String,
    gender: String,
    manager: String,
    email: String
});

mongoose.model('santas', santaSchema);
