# JavaScript end-to-end Azure Function to manage Azure

A simple Azure Function app with three API endpoints:

* [POST,DELETE] http://localhost:7071/api/resource-group
* [GET] http://localhost:7071/api/resource-groups
* [GET] http://localhost:7071/api/resources

## Features

* List all resource groups in a subscription
* List all resources in a subscription
* List all resources in a resource group
* Create a resource group
* Delete a resource group

## Getting Started

### Installation Prerequisites

* Node.js LTS (14+)

### Environment Variables

Environments:
* Local development uses [./local.settings.json](./local.settings.json)
* Remote development uses Azure Function Configuration settings

The following environment variables must be set:
* "AZURE_CLIENT_ID": "",
* "AZURE_CLIENT_SECRET": "",
* "AZURE_SUBSCRIPTION_ID":"",
* "AZURE_TENANT_ID":""

Do not change the names of the variables.

### Installation

- npm install 

### Quickstart with local development 

1. Run the following bash command:

    ```bash
    npm start
    ```

1. Wait until the local runtime displays the routes with methods.
1. Query the APIs with HTTP.

## Resources

- [Azure Functions](https://docs.microsoft.com/azure/azure-functions/)
- [Azure SDK for JavaScript](https://docs.microsoft.com/azure/developer/javascript/azure-sdk-library-package-index)
- [Azure SDK for Identity (DefaultAzureCredential)](https://docs.microsoft.com/javascript/api/overview/azure/identity-readme?view=azure-node-latest)
- [Azure SDK for Azure Resource Groups](https://docs.microsoft.com/javascript/api/overview/azure/arm-resources-readme)
