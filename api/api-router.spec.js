const request = require("supertest");
const server = require("./server.js");

describe("test server.js", () => {
  it("check server api is live", async () => {
    const res = await request(server).get("/api/");
    expect(res.status).toBe(200);
  });
});
