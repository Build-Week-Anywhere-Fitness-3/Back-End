const request = require("supertest");
const should = require("should");
// const db = require("../database/db-config.js");
// const User = require("../database/db-models/user-model.js");
const server = require("../server.js");

describe("user authorization", () => {
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

  it("should login user", done => {
    request(server)
      .get("/api/classes")
      .set("Authorization", token)
      .expect(200)
      .end(function(err, res) {
        if (err) return done(err);
        res.body.should.be.instanceof(Array);
        done();
      });
  });
});
