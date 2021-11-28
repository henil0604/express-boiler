module.exports = (callback = () => { }, req, res, next) => {

    req.HANDLE_RESPONSE = true;
    req.HANDLE_DATA = {
        statusCode: 302,
        data: {
            status: "pending",
            statusCode: 302,
            code: req.code.PENDING,
            message: "Request is pending"
        }
    }

    try {
        return callback(req, res, next);
    } catch (err) {

        req.HANDLE_DATA.statusCode = 500;
        req.HANDLE_DATA.data = {
            status: "error",
            statusCode: req.HANDLE_DATA.statusCode,
            code: req.code.SERVER_ERROR,
            message: "Something went wrong",
        };

        if (env("SERVER_MODE") == "dev") {
            req.HANDLE_DATA.data.data = err.message
        }

        return next()
    }

}