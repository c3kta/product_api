const PinoHttp = require('pino-http');

const pinoHttp = PinoHttp({
    level: process.env.PINO_LOG_LEVEL || 'info'
});

module.exports.pinoHttp = pinoHttp;
module.exports.logger = pinoHttp.logger;