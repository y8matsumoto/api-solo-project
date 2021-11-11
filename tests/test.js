const chai = require("chai");
const chaiHttp = require("chai-http");
chai.use(chaiHttp);
const { setupServer } = require("../src/server");

// this enables us to use .should assertions instead of expecct. Personal Preference
chai.should();

/*
 * This sprint you will have to create all tests yourself, TDD style.
 * For this you will want to get familiar with chai-http https://www.chaijs.com/plugins/chai-http/
 * The same kind of structure that you encountered in lecture.express will be provided here.
 */
const server = setupServer();

describe("Golf API Server", () => {
  let request;

  beforeEach(() => {
    request = chai.request(server);
  });

  describe("GET /api/golf - modifying data", () => {
    it("should return all course", async () => {
      const res = await request.get("/api/golf");
      // Assert
      res.should.have.status(200);
      res.should.be.json;
    });
  });

  describe("GET /api/golf/:name - modifying data", () => {
    it("should return a course", async () => {
      const res = await request.get("/api/golf/Daichiba country Club");
      // Assert
      res.should.have.status(200);
      res.should.be.json;
    });
  });

  describe("GET /api/golf/placeList/:place - modifying data", () => {
    it("should return a course", async () => {
      const res = await request.get("/api/golf/placeList/Chiba");
      // Assert
      res.should.have.status(200);
      res.should.be.json;
    });
  });

  // describe("POST /api/golf - endpoint", () => {
  //   it("should return added course", async () => {
  //     const expected = {
  //       "name": "Daystar Golf Club",
  //       "place": "Chiba",
  //       "best_score": 93,
  //       "last_score": 93,
  //       "memo": "Close soon. Good bye Daystar."
  //     }
  //     const res = await request.post("/api/golf").send(expected);
  //     // Assert
  //     res.should.be.json;
  //     res.should.have.status(200);
  //   });
  // });

  // describe("PATCH /api/golf/:name - endpoint", () => {
  //   it("should return changed course", async () => {
  //     const expected = {
  //       name: "Chisan Fuji Country",
  //       place: "Shizuoka",
  //       best_score: 97,
  //       last_score: 100,
  //       memo: "Always back tee. Battery Green."
  //     };
  //     const res = await request
  //       .patch("/api/golf/Chisan Fuji Country")
  //       .send(expected);
  //     // Assert
  //     res.should.have.status(200);
  //     res.should.be.json;
  //   });
  // });

  describe("DELETE /api/golf/:name - endpoint", () => {
    it("should return changed course", async () => {
      const res = await request.delete("/api/golf/Hoge");

      // Assert
      res.should.have.status(200);
      res.should.be.json;
    });
  });
});
