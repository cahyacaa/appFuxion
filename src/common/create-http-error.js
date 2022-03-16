class HttpError extends Error{
    constructor(message, code= 500, data = undefined) {
      super();
      this.message=message;
      this.code=code;
      this.data = data;
    }
  }
  
module.exports = HttpError;
  