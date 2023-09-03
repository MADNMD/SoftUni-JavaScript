const { getErrorMessage } = require('../utils/errorHellper');

exports.errorHellper = (err, req, res, next) => {

    const status = err.status || 404;

    res.status(status).render('404', { sitePage: '404 Page', error: getErrorMessage(err) });
}