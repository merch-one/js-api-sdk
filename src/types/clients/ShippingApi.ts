export default interface ShippingApi {
    /**
     * Returns a list of calculated shipping rates
     * for the given items and shipping info.
     */
    getRates(countryId: number, items: object[]): Promise<object>;

    /**
     * Returns a list of all available shipping types.
     */
    getTypes(): Promise<object>;

    /**
     * Returns a list of all available shipping methods.
     */
    getMethods(): Promise<object>;

    /**
     * Returns a list of countries with IDs and their corresponding codes.
     */
    getCountries(): Promise<object>;

    /**
     * Returns a list of regions within a specific country by providing its ID.
     */
    getRegions(countryId: number): Promise<object>;
}
