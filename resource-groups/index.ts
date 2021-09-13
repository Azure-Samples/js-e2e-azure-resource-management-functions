import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import { listResourceGroups } from "../lib/azure-resource-groups";

/*

Get Resource Groups:

curl http://localhost:7071/api/resource-groups

*/
const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {

    try{
        const list = await listResourceGroups();

        console.log(`${(list && list.length) ? list.length : 0} resource groups found`);

        context.res = {
            body: {
                status: 200,
                list: list
            }
        };
    } catch (err) {

        console.log(`No resource groups found: ${JSON.stringify(err)}`);

        context.res = {
            status: 500,
            body: err
        };
    }


};

export default httpTrigger;