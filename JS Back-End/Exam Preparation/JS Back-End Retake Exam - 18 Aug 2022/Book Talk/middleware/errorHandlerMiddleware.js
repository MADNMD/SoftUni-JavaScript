const { getErrorMessage } = require('../util/errorHellper');

exports.errorHanlder = (err, req, res, next) => {

    const status = err.status || 404;

    res.status(status).render('404', { error: getErrorMessage(err) });
}