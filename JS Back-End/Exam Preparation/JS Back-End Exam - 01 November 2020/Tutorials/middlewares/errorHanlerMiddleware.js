const { getErrorMEssage } = require('../utils/errorHellper');

exports.errorHandler = (err, req, res, next) => {

    const status = err.status || 404;

    res.status(status).render({ error: getErrorMEssage(err) });
}