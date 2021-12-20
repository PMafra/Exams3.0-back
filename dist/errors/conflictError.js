class ConflictError extends Error {
    constructor(message) {
        super(message);
        this.name = 'ConflictError';
        Object.setPrototypeOf(this, ConflictError.prototype);
    }
}
export default ConflictError;
