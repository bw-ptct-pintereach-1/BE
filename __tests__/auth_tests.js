const supertest = require("supertest");
const server = require("../index");
const db = require("../data/config");

beforeEach(async () => {
  await db.seed.run();
});

afterAll(async () => {
  await db.destroy();
});

describe("users integration testing", () => {
  const user = {
    username: "m",
    email: "whatever",
    password: "m",
  };

  it("POST /auth/register", async () => {
    const res = await supertest(server).post("/auth/register").send(user);
    expect(res.statusCode).toBe(201);
    expect(res.body.username).toBe("m");
    expect(res.type).toBe("application/json");
  });

  //checks for duplicates
  it("POST /auth/register", async () => {
    const newUser = {
      username: "mdl518",
      email: "mdl@aol.com",
      password: "pass22",
    };
    const res = await supertest(server).post("/auth/register").send(newUser);
    expect(res.type).toBe("application/json");
    expect(res.statusCode).toBe(409);
    expect(res.body.message).toBe("Username already in use");
  });

  it("POST /auth/login", async () => {
    const userLogin = {
      username: "mdl518",
      password: "pass22",
    };
    const res = await supertest(server).post("/auth/login").send(userLogin);
    expect(res.type).toBe("application/json");
    expect(res.statusCode).toBe(200);
  });
});
