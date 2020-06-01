const supertest = require("supertest");
const server = require("../index");


test("GET /", async () =>{
    const res = await supertest(server).get("/");
    
    expect(res.body.message).toBe("WELCOME TO PINTREACH 1!!!");
    expect(res.body.message).toMatch(/!/i); 
    expect(res.statusCode).toBe(200);
})