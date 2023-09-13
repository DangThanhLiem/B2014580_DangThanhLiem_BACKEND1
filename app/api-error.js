class ApiError extends Erroe {
    constructor(statusCode, message){
        super();
        this.statusCode = statusCode;
        this.message = message;
    }
}

module.exports = ApiError;