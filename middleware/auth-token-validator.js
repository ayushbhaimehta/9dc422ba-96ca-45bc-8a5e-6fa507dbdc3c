const jwt = require('jsonwebtoken');
const config = require('config');

const secretKey = '1122';

module.exports = function (req, res, next) {
    const token = req.header('x-auth-token');
    if (!token) {
        return res.status(400).send({
            message: 'Access denied. Auth token not found.',
            messageCode: 'TKNERR'
        });
    }
    try {
        const payload = jwt.verify(token, secretKey);
        next();
    } catch (err) {
        return res.status(400).send({
            message: 'Access denied. Invalid auth token.',
            messageCode: 'INVTKN'
        });
    }
}