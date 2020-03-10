const request = require("supertest");
const db = require("../database/db-config.js");
const User = require("../database/db-models/user-model.js");
const server = require("../api/server.js");

describe("user model", () => {
  it("should add client user ", async () => {
    const res = await request(server)
      .post("/api/auth/register")
      .send({ username: "client", password: "client", role: "client" });
    expect(res.status).toBe(201);
  });

  it("should add admin user ", async () => {
    const res = await request(server)
      .post("/api/auth/register")
      .send({ username: "admin", password: "admin", role: "instructor" });
    expect(res.status).toBe(201);
  });
});

// beforeEach(async () => {
//   await db("users").truncate();
// });

beforeAll(async () => {
  await db("users").truncate();
});
