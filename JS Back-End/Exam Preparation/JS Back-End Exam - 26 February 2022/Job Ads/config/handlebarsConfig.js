const handlebars = require('express-handlebars');

function handlebarsConfig(app){
    
    app.engine('hbs', handlebars.engine({
        extname: 'hbs'
    }));

    app.set('view engine', 'hbs')
    // app.set('views', 'src/views') това е ако работи с главна папка src;
}

module.exports = handlebarsConfig;