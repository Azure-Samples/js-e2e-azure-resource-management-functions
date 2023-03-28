import {
  app,
  HttpRequest,
  HttpResponseInit,
  InvocationContext
} from '@azure/functions';
import { listResourceGroups } from '../lib/azure-resource-groups';
import { processError } from '../lib/error';
import { ResourceGroup } from '@azure/arm-resources';

/*
Get resources in a resource group

curl http://localhost:7071/api/resource-groups
*/

export async function resourceGroups(
  request: HttpRequest,
  context: InvocationContext
): Promise<HttpResponseInit> {
  try {
    const {
      list,
      subscriptionId
    }: { list: ResourceGroup[]; subscriptionId: string } =
      await listResourceGroups();

    context.log(
      `${list && list.length ? list.length : 0} resource groups found`
    );

    return {
      jsonBody: {
        subscriptionId,
        list
      }
    };
  } catch (err: unknown) {
    return processError(err);
  }
}

app.http('resource-groups', {
  methods: ['GET'],
  authLevel: 'anonymous',
  handler: resourceGroups
});
