const supertest = require("supertest");
const server = require("../index");
const db = require("../data/config");

beforeEach(async () => {
  await db.seed.run();
});

afterAll(async () => {
  await db.destroy();
});

token = process.env.TOKEN;

describe("articles integration tests", () => {
  const article = {
    title: "test",
    content: "testing article routes",
    category_id: 3,
  };

  const updatedArticle = {
    title: "testput",
    content: "testing article put routes",
    category_id: 4,
  };
// GET TESTS
  it("GET /articles", async () => {
    const res = await supertest(server)
      .get("/articles")
      .set("authorization", token);
    expect(res.type).toBe("application/json");
    expect(res.statusCode).toBe(200);
  });

  it("GET /articles/:id", async () => {
    const res = await supertest(server)
      .get("/articles/1")
      .set("authorization", token);
    expect(res.type).toBe("application/json");
    expect(res.statusCode).toBe(200);
  });


  //POST TESTS
  it("POST /articles", async () => {
    const res = await supertest(server)
    .post("/articles/1")
    .send(article)
    .set("authorization", token);
    expect(res.type).toBe("application/json");
    expect(res.statusCode).toBe(200);
  });

  // missing data
  it("POST /articles", async () => {
    const res = await supertest(server)
    .post("/articles/1")
    .set("authorization", token);
    expect(res.type).toBe("application/json");
    expect(res.statusCode).toBe(400);
    expect(res.body.message).toMatch(/missing article/i);
  });

  //PUT TESTS

  it("PUT /articles/1/user/1", async () => {
    const res = await supertest(server)
    .put("/articles/1/user/1")
    .send(updatedArticle)
    .set("authorization", token);
    expect(res.type).toBe("application/json");
    expect(res.statusCode).toBe(200);
    
  });

  it("PUT /articles/2/user/2", async () => {
    const res = await supertest(server)
    .put("/articles/2/user/2")
    .send(updatedArticle)
    .set("authorization", token);
    expect(res.type).toBe("application/json");
    expect(res.statusCode).toBe(200);
    
  });

 // DELETE TEST

 it("DELETE /articles/1", async () => {
    const res = await supertest(server)
    .delete("/articles/1")
    .set("authorization", token);
    expect(res.type).toBe("application/json");
    expect(res.statusCode).toBe(200);
    expect(res.body.removed).toBe(1);
  });

  it("DELETE /articles/2", async () => {
    const res = await supertest(server)
    .delete("/articles/2")
    .set("authorization", token);
    expect(res.type).toBe("application/json");
    expect(res.statusCode).toBe(200);
    expect(res.body.removed).toBe(2);
  });

  it("DELETE /articles/3", async () => {
    const res = await supertest(server)
    .delete("/articles/3")
    .set("authorization", token);
    expect(res.type).toBe("application/json");
    expect(res.statusCode).toBe(200);
    expect(res.body.removed).toBe(3);
  });
});
