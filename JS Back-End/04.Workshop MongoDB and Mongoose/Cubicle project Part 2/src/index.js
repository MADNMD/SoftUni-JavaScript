const express = require('express');
const { initializeDatabase } = require('./config/database');
const router = require('./routes');
const port = 5000;

const app = express();

require('./config/handlebars')(app);

app.use('/static', express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(router);

initializeDatabase()
    .then(() => {
        app.listen(port, () => console.log(`App is listening at port ${port}`));
    })
    .catch((error) => {
        console.log('Cannot connect to db:', error);
    })