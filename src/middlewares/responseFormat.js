const response = (status, data, message, meta = {}) => {
    if (!data) data = {};
    return {
        status,
        message,
        data,
        meta,
    };
};

module.exports = (req, res, next) => {
    res.API = {
        success: (data, message = 'OK', code = 200) =>
            res.status(code).json(response(true, data, message)),
        // error function is send the exception to error handling middleware
        error: (message, code, meta = {}) => {
            console.log(message,code)
            res.status(code).json(response(false, null, message, meta))
        }
    };
    next();
};