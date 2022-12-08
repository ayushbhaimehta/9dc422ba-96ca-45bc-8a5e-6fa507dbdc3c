class Logger {
    constructor(loggerName) {
        this.loggerName = loggerName;
    }

    info(message) {
        console.log(`\x1b[32m[Logger: ${this.loggerName}: ${new Date()}] \nINFO: ${message}\x1b[0m`);
    }

    warn(message) {
        console.log(`\x1b[36m[Logger: ${this.loggerName}: ${new Date()}] \nWARN: ${message}\x1b[0m`);
    }

    error(message) {
        console.log(`\x1b[31m[Logger: ${this.loggerName}: ${new Date()}] \nERROR: ${message}\x1b[0m`);
    }
}



module.exports = Logger;