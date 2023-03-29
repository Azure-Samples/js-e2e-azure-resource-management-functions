// Include npm dependencies
import { DefaultAzureCredential } from "@azure/identity";
import { ResourceManagementClient } from "@azure/arm-resources";
import { getSubscriptionId } from "./environment-vars";

const subscriptionId  = getSubscriptionId();

// Create Azure authentication credentials
const credentials = new DefaultAzureCredential();

// Create Azure SDK client for Resource Management such as resource groups
const resourceManagement = new ResourceManagementClient(credentials, subscriptionId);

// all resources groups in subscription
export const listResourceBySubscription = async () =>{
    const list = await resourceManagement.resources.list();

    return {
        list,
        subscriptionId
    }
}
// all resources groups in resource group
export const listResourceByResourceGroup = async (resourceGroupName: string) =>{
    const list = await resourceManagement.resources.listByResourceGroup(resourceGroupName);

    return {
        list,
        resourceGroupName,
        subscriptionId
    }
}