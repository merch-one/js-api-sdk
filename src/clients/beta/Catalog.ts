import BaseApiClient from "@/clients/BaseApiClient";
import CatalogApi from "@/types/clients/CatalogApi";

export default class Catalog extends BaseApiClient implements CatalogApi {
    public getProducts(): Promise<object> {
        return this.request("get", "products");
    }

    public getProductVariants(productId: number): Promise<object> {
        return this.request("get", `products/${productId}`);
    }

    public getVariantOptions(variantId: number): Promise<object> {
        return this.request("get", `variants/${variantId}`);
    }

    public getVariantCombinations(variantId: number): Promise<object> {
        return this.request("get", `variants/${variantId}/combinations`);
    }
}
