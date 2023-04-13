export default class OrderStatus {

    /**
     * Order has been submitted but not yet confirmed.
     */
    public static get DRAFT(): string {
        return "DRAFT";
    }

    /**
     * Order has been confirmed and is being prepared for shipment.
     */
    public static get ACCEPTED(): string {
        return "ACCEPTED";
    }

    /**
     * Order has been completed and the product(s) is ready to be shipped.
     */
    public static get FULFILLED(): string {
        return "FULFILLED";
    }

    /**
     * Order has been cancelled by customer or admin.
     */
    public static get CANCELED(): string {
        return "CANCELED";
    }

    /**
     * Order has been refunded to the customer.
     */
    public static get REFUNDED(): string {
        return "REFUNDED";
    }

    /**
     * Order has been partially refunded to the customer.
     */
    public static get PARTIAL_REFUND(): string {
        return "PARTIAL_REFUND";
    }

    /**
     * Order has been placed by the customer and is waiting for payment to be completed.
     */
    public static get PENDING(): string {
        return "PENDING";
    }

    /**
     * Something went wrong during the processing of the order.
     */
    public static get ERROR(): string {
        return "ERROR";
    }

    /**
     * Order was prepared to be sent to production.
     */
    public static get GENERATED(): string {
        return "GENERATED";
    }

    /**
     * Order was sent to production.
     */
    public static get IN_PROGRESS(): string {
        return "IN_PROGRESS";
    }

    /**
     * Returns all the possible order statuses.
     */
    public static get all(): string[] {
        return [
            OrderStatus.DRAFT,
            OrderStatus.ACCEPTED,
            OrderStatus.FULFILLED,
            OrderStatus.CANCELED,
            OrderStatus.REFUNDED,
            OrderStatus.PARTIAL_REFUND,
            OrderStatus.PENDING,
            OrderStatus.ERROR,
            OrderStatus.GENERATED,
            OrderStatus.IN_PROGRESS,
        ];
    }
}
