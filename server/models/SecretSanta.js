/**
 * SecretSanta Model
 * @type {Schema|Mongoose}
 */

const mongoose = require('mongoose');
const {Schema} = mongoose;

const SantaSchema = require('./Santa');

const secretSantaSchema = new Schema({
    name: String,
    santas: [SantaSchema],
    _user: {type: Schema.Types.ObjectId, ref: 'User'},
});

mongoose.model('secretSantas', secretSantaSchema);
