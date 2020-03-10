const request = require("supertest");
const server = require("./server.js");

describe("test server.js", () => {
  it("should set the testing environemt", () => {
    expect(process.env.DB_ENV).toBe("testing");
  });
});
