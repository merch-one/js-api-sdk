export default class MerchOneApiServerError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "MerchOneApiServerError";
    }
}
