const resolveRequest = imp("app/helpers/resolveRequest");
const createResponse = imp("app/helpers/createResponse");
const responseCodes = imp("app/data/responseCodes");

module.exports = async (req, res, next) => {

    req.createResponse = createResponse;
    req.resolve = resolveRequest(req, res)
    req.code = responseCodes;

    next()
}
