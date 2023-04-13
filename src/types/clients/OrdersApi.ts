export default interface OrdersApi {
    /**
     * Returns a list of all the orders.
     */
    all(page?: number): Promise<object>;

    /**
     * Creates an order and returns it.
     */
    create(order: object): Promise<object>;

    /**
     * Returns retrieves information about the specific order.
     */
    get(orderId: string, usingExternalId?: boolean): Promise<object>;

    /**
     * Cancels a specific order.
     */
    cancel(orderId: string): Promise<boolean>;

    /**
     * Returns an order if it exists or create a new one.
     */
    firstOrCreate(order: object, usingExternalId?: boolean): Promise<object>;
}
