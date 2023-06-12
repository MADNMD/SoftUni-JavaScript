const routre = require('express').Router();

routre.get('/', (req, res) => {
   res.render('home', {sitePage: 'Home Page'});
});


module.exports = routre;