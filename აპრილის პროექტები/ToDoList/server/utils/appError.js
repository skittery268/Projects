// Class to create custom errors with a message and status code
class AppError extends Error {
    constructor(message, statusCode) {
        super(message);

        this.statusCode = statusCode;

        this.status = `${statusCode}`.startsWith("4") ? "fail" : "error";

        this.isOperational = true
    }
}

module.exports = AppError;