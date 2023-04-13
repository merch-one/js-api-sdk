import Fetch from "@/http/Fetch";
import FetchResponse from "@/http/FetchResponse";
import MerchOneApiServerError from "@/errors/MerchOneApiServerError";
import MerchOneApiClientError from "@/errors/MerchOneApiClientError";
import InvalidCredentialsError from "@/errors/InvalidCredentialsError";

export default abstract class BaseApiClient {
    protected httpClient: Fetch;

    constructor(httpClient: Fetch) {
        this.httpClient = httpClient;
    }

    protected request(method: string, path: string, data: any = {}, responseKey: string | null = "data"): Promise<any> {
        return new Promise((resolve) => {
            new Fetch(this.httpClient.defaults.baseURL, this.httpClient.defaults.headers)
                .request(path, method, data)
                .then((response: any) => resolve(response.json(responseKey)))
                .catch(this.handleError);
        });
    }

    private handleError = (response: FetchResponse) => {

        if (response.serverError()) {
            throw new MerchOneApiServerError(response.getMessage());
        }

        if (response.unauthorized()) {
            throw new InvalidCredentialsError();
        }

        if (response.clientError()) {
            throw new MerchOneApiClientError(response.getErrors());
        }

        return Promise.reject(response.getMessage());
    }
}
