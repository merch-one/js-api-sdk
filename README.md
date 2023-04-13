<h2 align="center">
    JavaScript SDK for MerchOne API integration
</h2>

<p align="center">
    <a href="https://www.npmjs.com/package/@merch-one/api"><img src="https://img.shields.io/npm/v/@merch-one/api?color=orange&style=flat-square" alt="NPM Version"></a>
    <a href="https://www.npmjs.com/package/@merch-one/api"><img src="https://img.shields.io/npm/l/@merch-one/api?color=brightgreen&style=flat-square" alt="License"></a>
    <a href="https://www.npmjs.com/package/@merch-one/api"><img src="https://img.shields.io/github/last-commit/merch-one/js-api-sdk?color=blue&style=flat-square" alt="GitHub last commit"></a>
</p>

This package provide a set of tools that allow developers to easily integrate with MerchOne API.

## Installation
```shell
npm install @merch-one/api
```

## Overview

- [Introduction](#introduction)
- [Basic Usage](#basic-usage)
- [Helpers](#helpers)
- [Exceptions](#exceptions)

---

### Introduction
**Client provide 3 different API's to interact with.**
- Catalog API
- Orders API
- Shipping API

**To get the list of available endpoints, please check 
[MerchOne API Documentation](https://docs.merchone.com/api-reference)**

--- 

### Basic Usage

- Package exports 3 classes: `Client`, `MerchOneApi`, `OrderStatus`

**Create an instance of `Client`**

```javascript
// import ES module
import { Client } from '@merch-one/api';

// require CommonJS module
const { Client } = require('@merch-one/api');

const client = Client.make();

function doSomething() {
    // authenticate client using credentials
    client.auth(
        'your-store-user',
        'your-store-key'
    )
    
    // or authenticate client using base64 encoded credentials
    client.basicAuth(
        btoa('your-store-user:your-store-key'),
    )
    
    /* Interact with Catalog API */
    const catalogApi = client.catalog();
    
    /* Interact with Orders API */
    const ordersApi = client.orders();
    
    /* Interact with Shipping API */
    const shippingApi = client.shipping();
    
    // switch API version you interact with
    client.setVersion(version);
    
    // get current API version
    client.getVersion();
}

```

- The `Client` class accepts `version` parameter. Default value is set `beta`
  - See [Helpers](#helpers) for available versions.
--- 

### Helpers

```js
// import ES module
import { MerchOneApi } from '@merch-one/api';

// require CommonJS module
const { MerchOneApi } = require('@merch-one/api');

// get the list of all available API versions
MerchOneApi.getVersions()
```

- Class OrderStatus provides a full list of Order statuses.

```js
// import ES module
import { OrderStatus } from '@merch-one/api';

// require CommonJS module
const { OrderStatus } = require('@merch-one/api');

// get the list of all available Order statuses
OrderStatus.all();
```


Check more in [MerchOne API Documentation](https://docs.merchone.com/api-reference/orders#order-status)

--- 

### Exceptions

The package can throw the following exceptions:

| Exception                 | Reason                                              |
|---------------------------|-----------------------------------------------------|
| *MerchOneApiClientError*  | Request is not correct or validation did not pass.  |
| *MerchOneApiServerError*  | A server error occurred.                            |
| *InvalidApiVersionError*  | An invalid API version was provided to the Client.  |
| *InvalidCredentialsError* | Invalid API credentials was provided to the Client. |


---
Under the hood, the package uses [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) to make requests.

Make sure you checked [Browser compatibility](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API#browser_compatibility) before using it.

Also take note that Fetch API is available in Node.js only since version 17.5 with flag `--experimental-fetch`.
Starting from version 18.0, the flag is no longer required.
