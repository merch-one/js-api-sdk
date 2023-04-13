export default interface CatalogApi {
    /**
     * Returns a list with all available products.
     */
    getProducts(): Promise<object>;

    /**
     * Returns a list of all available product's variants.
     */
    getProductVariants(productId: number): Promise<object>;

    /**
     * Returns a list of all available variant's options.
     */
    getVariantOptions(variantId: number): Promise<object>;

    /**
     * Returns a list of all available SKU's variant options.
     */
    getVariantCombinations(variantId: number): Promise<object>;
}
