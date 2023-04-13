import BaseApiClient from "@/clients/BaseApiClient";
import OrdersApi from "@/types/clients/OrdersApi";

export default class Orders extends BaseApiClient implements OrdersApi {
    public all(page: number = 1): Promise<object> {
        return new Promise(resolve => {
            this.request("get", `orders?page=${page}`, {}, null)
                .then((response) => {
                    resolve({
                        orders: response.data,
                        pagination: response.meta.pagination,
                    });
                });
        });
    }

    public create(order: object): Promise<object> {
        return this.request("post", "/orders", order);
    }

    public get(orderId: string, usingExternalId: boolean = false): Promise<object> {
        orderId = usingExternalId ? `@${orderId}` : orderId;

        return this.request("get", `/orders/${orderId}`);
    }

    public cancel(orderId: string): Promise<boolean> {
        return new Promise((resolve, reject) => {
            this.request("delete", `/orders/${orderId}`)
                .then(() => resolve(true))
                .catch(() => reject(false));
        });
    }

    public firstOrCreate(order: any, usingExternalId: boolean = true): Promise<object> {
        const orderId = usingExternalId ? order.external_id : order.id;

        return new Promise(resolve => {
            this.get(orderId, usingExternalId)
                .then((response) => resolve(response))
                .catch(async () => {
                    await this.create(order);
                });
        });
    }
}
