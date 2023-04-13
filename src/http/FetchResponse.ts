export default class FetchResponse {
    private response: Response;
    private jsonBody: any = null;

    constructor(response: Response) {
        this.response = response;
    }

    public status(): number {
        return this.response.status;
    }

    public successful(): boolean {
        return this.status() >= 200 && this.status() < 300;
    }

    public unauthorized(): boolean {
        return this.status() === 401;
    }

    public clientError(): boolean {
        return this.status() >= 400 && this.status() < 500;
    }

    public serverError(): boolean {
        return this.status() >= 500;
    }

    public json(key = null): any {
        const data = this.jsonBody ?? {};

        if (key) {
            return data[key] ?? null;
        }

        return data;
    }

    public loadJson(): Promise<any> {
        return this.response.json().then((data) => {
            this.jsonBody = data;
        });
    }

    public getMessage(): string {
        return this.jsonBody?.message ?? null;
    }

    public getErrors(): string {
        const data = this.jsonBody;

        if (data.hasOwnProperty("errors")) {
            return Object.values(data.errors ?? []).join(" | ");
        }

        return this.getMessage() ?? "Whoops. Something went wrong !";
    }
}
