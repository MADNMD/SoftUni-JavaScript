const express = require('express');
const handlebars = require('express-handlebars');
const cookieParser = require('cookie-parser');

const { PORT } = require('./config/evn');
const { initDB } = require('./config/database');
const router = require('./routes');
const { auth } = require('./middlewares/authMiddleware');
const {errorHandler} = require('./middlewares/errorHanlerMiddleware');

const app = express();

app.engine('hbs', handlebars.engine({
    extname: 'hbs'
}));

app.set('view engine', 'hbs');

app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));
app.use(cookieParser());
app.use(auth);
app.use(router);
app.use(errorHandler);

initDB();

app.listen(PORT, () => console.log(`App is listening at port ${PORT}`));