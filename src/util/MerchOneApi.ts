import InvalidApiVersionError from "@/errors/InvalidApiVersionError";

export default class MerchOneApi {
    public static get HOST(): string {
        return "https://api.merchone.com/";
    }

    public static get VERSION_BETA(): string {
        return "beta";
    }

    public static getBaseUrl(version: string = MerchOneApi.VERSION_BETA, host?: string): string {
        host = host || MerchOneApi.HOST;

        if (!host.endsWith("/")) {
            host += "/";
        }

        return host + MerchOneApi.getVersionPath(version);
    }

    public static getVersionPath(version: string): string {
        MerchOneApi.validateVersion(version);
        return `api/${version}/`;
    }

    public static getVersions(): string[] {
        return [MerchOneApi.VERSION_BETA];
    }

    public static getSdkVersion() {
        return "1.0.1";
    }

    private static validateVersion(version: string): void {
        if (!MerchOneApi.getVersions().includes(version)) {
            throw new InvalidApiVersionError(`Invalid API version: ${version}`);
        }
    }
}
