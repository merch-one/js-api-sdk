import BaseApiClient from "@/clients/BaseApiClient";
import ShippingApi from "@/types/clients/ShippingApi";

export default class Shipping extends BaseApiClient implements ShippingApi {
    public getRates(countryId: number, items: object[]): Promise<object> {
        const body = {
            shipping: {
                country: countryId,
            },
            items
        };

        return this.request("post", "/shipping/rates", body);
    }

    public getTypes(): Promise<object> {
        return this.request("get", "/shipping/types");
    }

    public getMethods(): Promise<object> {
        return this.request("get", "/shipping/methods");
    }

    public getCountries(): Promise<object> {
        return this.request("get", "/countries");
    }

    public getRegions(countryId: number): Promise<object> {
        return this.request("get", `/regions/${countryId}`);
    }
}
