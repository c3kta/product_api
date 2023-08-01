const mongoose = require("mongoose");
const logger = require('./logger').logger;

module.exports = () => {
    mongoose.connect(process.env.MONGODB_URL + process.env.DB_NAME)
        .then(() => {
            logger.info("База данных подключена");
        }).catch((e) => {
            logger.error(e.message);
        });

    mongoose.connection.on('connected', () => {
        logger.info("Mongoose подключён к базе данных");
    });

    mongoose.connection.on('error', (e) => {
        logger.error(e.message);
    });

    mongoose.connection.on('disconnected', () => {
        logger.warn("База данных отключена от приложения");
    });

    process.on('SIGINT', () => {
        mongoose.connection.close().then(() => {
            logger.warn("Подключение к базе данных разорвано");
            logger.warn("Сервер остановлен");
            process.exit(0);
        });
    });
}