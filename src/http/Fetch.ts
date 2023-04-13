import FetchResponse from "@/http/FetchResponse";

const methodsWithBody: string[] = ["post", "put", "patch"];
export default class Fetch {
    public defaults: any = {
        baseUrl: null,
        headers: {},
    };

    constructor(baseUrl: string | null = null, headers: any = {}) {
        this.defaults.baseUrl = this.setBaseUrl(baseUrl);
        this.defaults.headers = headers;
    }

    public static make(baseUrl: string | null = null, headers: any = {}): Fetch {
        return new Fetch(baseUrl, headers);
    }

    public async request(url: string, method: string, data: any = {}): Promise<any> {
        url = this.getUri(url);
        const init: any = {
            method,
            headers: this.defaults.headers,
        };

        if (methodsWithBody.includes(method.toLowerCase())) {
            init.body = JSON.stringify(data);
        }

        return new Promise(async (resolve, reject) => {
            const response = new FetchResponse(await fetch(url, init));

            await response.loadJson();

            if (response.successful()) {
                return resolve(response);
            }

            return reject(response);
        });
    }

    private setBaseUrl(baseUrl: string | null): string | null {
        if (baseUrl) {
            if (!baseUrl.endsWith("/")) {
                baseUrl += "/";
            }

            this.defaults.baseUrl = baseUrl;
        }

        return this.defaults.baseUrl;
    }

    private getUri(path: string): string {
        if (this.defaults.baseUrl) {
            path = path.startsWith("/") ? path.slice(1) : path;
        }

        return this.defaults.baseUrl + path;
    }
}
