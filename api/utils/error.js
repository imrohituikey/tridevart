export const errorHandler = (statusCode, message) =>{
    const error = new Error();
    error.statsCode = statusCode
    error.message = message
    return error;
}