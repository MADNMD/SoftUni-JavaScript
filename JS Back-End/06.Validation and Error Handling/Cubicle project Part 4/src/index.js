const express = require('express');
const cookieParser = require('cookie-parser');

const { initializeDatabase } = require('./config/database');
const { auth } = require('./middlewares/authMiddleware');
const { errorHandler } = require('./middlewares/errorHandlerMiddleware');
const router = require('./routes');
const port = 5000;

const app = express();

require('./config/handlebars')(app);

app.use('/static', express.static('public'));
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(auth);
app.use(router);
app.use(errorHandler);//добавяме errorHanlera последен и ако никой преди това не се справи с грешката той да я улови;

initializeDatabase()
    .then(() => {
        app.listen(port, () => console.log(`App is listening at port ${port}...`));
    })
    .catch((error) => {
        console.log('Cannot conect to db:', error)
    });
