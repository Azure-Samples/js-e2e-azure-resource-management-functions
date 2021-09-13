import { AzureFunction, Context, HttpRequest } from "@azure/functions";
import {
  createResourceGroup,
  deleteResourceGroup,
} from "../lib/azure-resource-groups";

/*

Add Resource Group:

curl -X POST http://localhost:7071/api/resource-group \
  -H 'Content-Type: application/json' \
  -d '{"resourceGroupName":"REPLACE-WITH-YOUR-RESOURCE-GROUP-NAME","resourceGroupLocation":"westus"}'

curl -X DELETE http://localhost:7071/api/resource-group \
  -H 'Content-Type: application/json' \
  -d '{"resourceGroupName":"REPLACE-WITH-YOUR-RESOURCE-GROUP-NAME"}'

*/
const httpTrigger: AzureFunction = async function (
  context: Context,
  req: HttpRequest
): Promise<void> {
  try {
    const name: string = req?.body?.resourceGroupName;
    const location: string = req?.body?.resourceGroupLocation;
    const tags: {
      [propertyName: string]: string;
    } = req.body.resourceGroupTags;

    switch (req.method) {
      case "POST":
        if (!req.body.resourceGroupName || !req.body.resourceGroupLocation) {
          const errorMessage = "Missing required parameters in POST body.";

          context.res = {
            status: 400,
            body: {
              errorMessage,
            },
          };
        } else {
          const result = await createResourceGroup(name, location, tags);
          context.res = {
            body: {
              status: 200,
            },
          };
        }

        break;
      case "DELETE":
        if (!req.body.resourceGroupName) {
          const errorMessage = "Missing required parameter in DELETE body.";

          context.res = {
            status: 400,
            body: {
              errorMessage,
            },
          };
        } else {
          const result = await deleteResourceGroup(name);
          context.res = {
            body: {
              status: 200,
            },
          };
        }
        break;
      default:
        throw new Error("Method not supported");
    }
  } catch (err) {
    context.res = {
      status: 500,
      body: err,
    };
  }
};

export default httpTrigger;
