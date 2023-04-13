export default class InvalidCredentialsError extends Error {
    constructor() {
        super("Invalid API credentials");
        this.name = "InvalidApiCredentialsError";
    }
}
