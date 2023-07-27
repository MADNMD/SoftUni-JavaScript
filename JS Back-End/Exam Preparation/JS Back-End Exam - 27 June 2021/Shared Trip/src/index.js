const express = require('express');
const cookieParser = require('cookie-parser');

const { initDB } = require('./config/databaseConfig');
const { PORT } = require('./config/evn');
const expressConfig = require('./config/expressConfig');
const handlebarsConfig = require('./config/handlebarsConfig');
const router = require('./routes');
const { auth } = require('./middlewares/authMiddleware');
const { errorHellper } = require('./middlewares/errorHanlerMiddleware');

const app = express();

expressConfig(app);
handlebarsConfig(app);
app.use(cookieParser());
app.use(auth);
app.use(router);
app.use(errorHellper);

initDB();

app.listen(PORT, () => console.log(`App is listenig at port ${PORT}`));