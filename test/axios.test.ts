import axios from "axios";

/*
You must start function server separately before running these tests
*/

describe("test list functions", () => {

  it("should return all resource groups", async () => {
    const result = await axios.get("http://localhost:7071/api/resource-groups");
    const resultsData = result.data;

    expect(resultsData.list.length > 0).toBe(true);
  });
  it("should return all resources in resource group", async () => {
    const resourceGroupName = "REPLACE-WITH-YOUR-RESOURCE-GROUP-NAME";
    const result = await axios.get(
      `http://localhost:7071/api/resources?resourceGroupName=${resourceGroupName}`
    );
    const resultsData = result.data;

    expect(resultsData.list.length > 0).toBe(true);
  });
  it("should return all resources", async () => {
    const result = await axios.get("http://localhost:7071/api/resources");
    const resultsData = result.data;
    expect(resultsData.list.length > 0).toBe(true);
  });
  it("should return all resources", async () => {
    const result = await axios.get("http://localhost:7071/api/resources");
    const resultsData = result.data;
    expect(resultsData.list.length > 0).toBe(true);
  });
});
