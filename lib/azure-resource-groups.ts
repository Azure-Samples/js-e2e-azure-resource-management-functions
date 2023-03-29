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
export const listResourceGroups = async () =>{
    return await resourceManagement.resourceGroups.list();
}
export const createResourceGroup = async (resourceGroupName: string, location: string, tags: { [propertyName: string]: string; }) =>{

    const resourceGroupParameters = {
        location: location,
        tags: tags
    };

    return await resourceManagement.resourceGroups.createOrUpdate(
        resourceGroupName,
        resourceGroupParameters
    );
}
export const deleteResourceGroup = async (resourceGroupName: string) =>{
    return await resourceManagement.resourceGroups.beginDeleteAndWait(resourceGroupName);
}   
