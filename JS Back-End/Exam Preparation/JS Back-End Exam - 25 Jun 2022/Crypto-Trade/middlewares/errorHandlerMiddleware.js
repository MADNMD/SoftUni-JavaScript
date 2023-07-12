const { getErrorMessages } = require('../utils/errorHellper');

exports.errorHanlder = (err, req, res, next) => {

    const status = err.status || 404;

    res.status(status).render('404', { error: getErrorMessages(err) });
}