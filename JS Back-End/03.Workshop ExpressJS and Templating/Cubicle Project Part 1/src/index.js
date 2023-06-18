const express = require('express');
const handlebars = require('express-handlebars');
const routes = require('./routes');
const port = 5000;

const app = express();

app.use('/static', express.static('public'));

app.use(express.urlencoded({ extended: false })); //  така взимам данните от формата; req.body;

app.engine('hbs', handlebars.engine({
    extname: 'hbs'
}));
app.set('view engine', 'hbs');
app.set('views', './src/views');

app.use(routes);

app.listen(port, () => console.log(`App is listening at port ${port}`));