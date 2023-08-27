const { getErrorMessage } = require('../utils/errorHellper');

// const getErrorMessage = (err) => {

//     // console.log(err);
//     return err.message;
// }

exports.errorHandler = (err, req, res, next) => { // този errorHandler го слагаме на последно място в index.js файла;

    const status = err.status || 404;

    res.status(status).render('404', { error: getErrorMessage(err) });

}