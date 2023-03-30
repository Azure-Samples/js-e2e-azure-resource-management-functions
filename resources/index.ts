import { AzureFunction, Context, HttpRequest } from "@azure/functions";
import {
  listResourceBySubscription,
  listResourceByResourceGroup,
} from "../lib/azure-resource";
/*

Get resources in a subscription

curl http://localhost:7071/api/resources

Get resources in a resource group

curl http://localhost:7071/api/resources?resourceGroupName=REPLACE-WITH-YOUR-RESOURCE-GROUP-NAME

*/
const httpTrigger: AzureFunction = async function (
  context: Context,
  req: HttpRequest
): Promise<void> {
  try {
    const name: string =
      req?.params?.resourceGroupName || req?.body?.resourceGroupName || "";
    let results = {};

    switch (req.method) {
      case "GET":
        if (name) {
          context.log(`called ${name}`);
          results = await listResourceByResourceGroup(name);
        } else {
          results = await listResourceBySubscription();
        }
        break;
      default:
        throw new Error("Method not supported");
    }

    context.res = {
      body: results,
    };
  } catch (err) {
    context.log(JSON.stringify(err));
    context.res = {
      status: 500,
      body: err,
    };
  }
};

export default httpTrigger;
