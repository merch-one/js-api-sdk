export default class InvalidApiVersionError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "InvalidApiVersionError";
    }
}
