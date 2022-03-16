const HttpError = require("../common/create-http-error");

module.exports = (err, _req, res, _next) => {
  
  let message,code, meta;
  if (err instanceof HttpError) {
    message = err.message;
    code = err.code;
    meta = err.data;
  }else {
    message = 'Unknown Error';
    code = 500;
  }
  return res.API.error(message, code, meta);
};
