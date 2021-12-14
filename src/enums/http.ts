enum HttpStatusCode {
    BAD_REQUEST = 400,
    NOT_FOUND = 404,
    CONFLICT = 409,
    SERVER_ERROR = 500,
    UNAUTHORIZED = 401,
    OK = 200,
    FORBIDDEN = 403,
}

enum HttpStatusMessage {
    BAD_REQUEST = 'bad request',
    NOT_FOUND = 'not found',
    CONFLICT = 'conflict',
    SERVER_ERROR = 'server error',
    UNAUTHORIZED = 'unauthorized',
    OK = 'ok',
    FORBIDDEN = 'forbidden',
}

export {
  HttpStatusCode,
  HttpStatusMessage,
};
