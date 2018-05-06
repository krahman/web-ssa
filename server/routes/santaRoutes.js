const mongoose = require('mongoose');

const requireLogin = require('../middlewares/requireLogin');
const SecretSantas = mongoose.model('secretSantas');

module.exports = app => {
    app.get(
        '/api/secret_santa_list',
        requireLogin,
        async (req, res) => {
            const secretSantas = await SecretSantas.find({_user: req.user.id});
            console.log('SecretSantaList', secretSantas);
            res.send(secretSantas);
        }
    )
};