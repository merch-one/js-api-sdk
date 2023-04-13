import CatalogApi from "@/types/clients/CatalogApi";
import OrdersApi from "@/types/clients/OrdersApi";
import ShippingApi from "@/types/clients/ShippingApi";
import { default as CatalogBeta } from "@/clients/beta/Catalog";
import { default as OrdersBeta } from "@/clients/beta/Orders";
import { default as ShippingBeta } from "@/clients/beta/Shipping";
import MerchOneApi from "@/util/MerchOneApi";
import Fetch from "@/http/Fetch";

export default class Client {
    apiVersion: string;
    host: string | undefined = undefined;
    httpClient: Fetch;

    protected headers: any = {
        Accept: "application/json",
        "Content-Type": "application/json",
    };

    constructor(apiVersion: string = MerchOneApi.VERSION_BETA) {
        this.apiVersion = apiVersion;
        this.headers["X-Library"] = `MerchOne JS SDK/${MerchOneApi.getSdkVersion()}`;

        this.httpClient = this.buildClient();
    }

    public static make(apiVersion: string = MerchOneApi.VERSION_BETA): Client {
        return new Client(apiVersion);
    }

    public auth(user: string, key: string): Client {
        this.basicAuth(btoa(`${user}:${key}`));

        return this;
    }

    public basicAuth(token: string): Client {
        this.headers.Authorization = `Basic ${token}`;
        this.buildClient();

        return this;
    }

    public setHost(host: string): Client {
        this.host = host;
        this.buildClient();

        return this;
    }

    public setVersion(version: string): Client {
        this.apiVersion = version;
        this.buildClient();

        return this;
    }

    public getVersion(): string {
        return this.apiVersion;
    }

    /**
     * Client for interacting with Catalog API endpoints.
     *
     * @see https://docs.merchone.com/api-reference/catalog
     *
     * @return CatalogApi
     */
    public catalog(): CatalogApi {
        return new CatalogBeta(this.httpClient);
    }

    /**
     * Client for interacting with Orders API.
     *
     * @see https://docs.merchone.com/api-reference/orders
     *
     * @return OrdersApi
     */
    public orders(): OrdersApi {
        return new OrdersBeta(this.httpClient);
    }

    /**
     * Client for interacting with Shipping API.
     *
     * @see https://docs.merchone.com/api-reference/shipping
     *
     * @return ShippingApi
     */
    public shipping(): ShippingApi {
        return new ShippingBeta(this.httpClient);
    }

    private buildClient(): Fetch {
        const baseUrl = MerchOneApi.getBaseUrl(this.apiVersion, this.host);
        const headers = this.headers;

        if (!this.httpClient) {
            this.httpClient = Fetch.make(baseUrl, headers);
        }

        this.httpClient.defaults.baseURL = baseUrl;
        this.httpClient.defaults.headers = headers;

        return this.httpClient;
    }
}
