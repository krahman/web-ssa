/**
 * Require Login MiddleWare
 * @param req
 * @param res
 * @param next
 * @returns {*|void}
 */

module.exports = (req, res, next) => {
    if (!req.user) {
        return res.status(401).send({error: 'You must login to access this page!'});
    }

    next();
};