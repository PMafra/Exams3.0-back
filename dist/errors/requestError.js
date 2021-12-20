class RequestError extends Error {
    constructor(message) {
        super(message);
        this.name = 'RequestError';
        Object.setPrototypeOf(this, RequestError.prototype);
    }
}
export default RequestError;
