// Инициализация переменных окружения
require('dotenv').config();

const express = require('express');
const createError = require('http-errors');
const logger = require("./logger").logger;
const pinoHttp = require('./logger').pinoHttp;


// Инициализация базы данных
require('./db')();

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(pinoHttp);


const ProductRoute = require('./Routes/Product.route');
app.use('/products', ProductRoute);

// Обработка запроса 404
app.use((req, res, next) => {
    next(createError(404, "Not found"));
});

// Обработчик ошибок
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.send({
        error: {
            status: err.status || 500,
            message: err.message
        }
    })
});

app.listen(PORT, () => {
    logger.info(`Port ${PORT} is listening`);
});