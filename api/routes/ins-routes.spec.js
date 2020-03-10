const request = require("supertest");
const should = require("should");
const server = require("../server.js");
const db = require("../../database/db-config.js");

describe("instructor classes", () => {
  let token = null;
  beforeEach(function(done) {
    request(server)
      .post("/api/auth/login")
      .send({ username: "admin", password: "admin" })
      .end(function(err, res) {
        token = res.body.token;
        done();
      });
  });

  it(" should add class", done => {
    console.log("token: ", token);
    const newClass = {
      name: "yoga beginner 108",
      group: "yoga",
      class_date: "2020-03-26",
      start_time: "4:30pm",
      duration: 30,
      intensity_level: 2,
      location: "Austin",
      current_size: 2,
      max_size: 20
    };
    request(server)
      .post("/api/ins/create-class")
      .send(newClass)
      .set("Authorization", token)
      .expect(201)
      .end(function(err, res) {
        if (err) return done(err);
        res.body.should.be.instanceof(Object);
        done();
      });
  });

  //   it("retrieve reservations", done => {
  //     request(server)
  //       .get("/api/cli/reservations")
  //       .set("Authorization", token)
  //       .expect(200)
  //       .end(function(err, res) {
  //         if (err) return done(err);
  //         res.body.should.be.instanceof(Array);
  //         done();
  //       });
  //   });
});

beforeEach(async () => {
  const { id } = await db("classes")
    .orderBy("id", "desc")
    .limit(1)
    .first();

  await db("classes")
    .where({ id })
    .del();
});
