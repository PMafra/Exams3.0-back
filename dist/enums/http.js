var HttpStatusCode;
(function (HttpStatusCode) {
    HttpStatusCode[HttpStatusCode["BAD_REQUEST"] = 400] = "BAD_REQUEST";
    HttpStatusCode[HttpStatusCode["NOT_FOUND"] = 404] = "NOT_FOUND";
    HttpStatusCode[HttpStatusCode["CONFLICT"] = 409] = "CONFLICT";
    HttpStatusCode[HttpStatusCode["SERVER_ERROR"] = 500] = "SERVER_ERROR";
    HttpStatusCode[HttpStatusCode["UNAUTHORIZED"] = 401] = "UNAUTHORIZED";
    HttpStatusCode[HttpStatusCode["OK"] = 200] = "OK";
    HttpStatusCode[HttpStatusCode["FORBIDDEN"] = 403] = "FORBIDDEN";
})(HttpStatusCode || (HttpStatusCode = {}));
var HttpStatusMessage;
(function (HttpStatusMessage) {
    HttpStatusMessage["BAD_REQUEST"] = "bad request";
    HttpStatusMessage["NOT_FOUND"] = "not found";
    HttpStatusMessage["CONFLICT"] = "conflict";
    HttpStatusMessage["SERVER_ERROR"] = "server error";
    HttpStatusMessage["UNAUTHORIZED"] = "unauthorized";
    HttpStatusMessage["OK"] = "ok";
    HttpStatusMessage["FORBIDDEN"] = "forbidden";
})(HttpStatusMessage || (HttpStatusMessage = {}));
export { HttpStatusCode, HttpStatusMessage, };
