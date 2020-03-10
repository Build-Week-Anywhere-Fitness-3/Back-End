const request = require("supertest");
const should = require("should");
const server = require("../server.js");
const db = require("../../database/db-config.js");

describe("class reservations", () => {
  let token = null;
  beforeEach(function(done) {
    request(server)
      .post("/api/auth/login")
      .send({ username: "client", password: "client" })
      .end(function(err, res) {
        token = res.body.token;
        done();
      });
  });

  it("should add reservation", done => {
    request(server)
      .post("/api/cli/add-reservation")
      .send({ id: "1" })
      .set("Authorization", token)
      .expect(200)
      .end(function(err, res) {
        if (err) return done(err);
        res.body.should.be.instanceof(String);
        done();
      });
  });

  it("retrieve reservations", done => {
    request(server)
      .get("/api/cli/reservations")
      .set("Authorization", token)
      .expect(200)
      .end(function(err, res) {
        if (err) return done(err);
        res.body.should.be.instanceof(Array);
        done();
      });
  });
});

beforeEach(async () => {
  await db("class_users")
    .orderBy("id", "desc")
    .limit(1)
    .del();
});
