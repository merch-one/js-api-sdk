export default class MerchOneApiClientError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "MerchOneApiClientError";
    }
}
