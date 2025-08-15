import supertest from "supertest";
import app from "../app";

describe("Person API", () => {
  it("GET /person/list should return all person", async () => {
    const res = await supertest(app).get("/person/list");
    expect(res.statusCode).toBe(200);
    expect(res.body).toBeInstanceOf(Array);
    expect(res.body.length).toBeGreaterThan(0);
  });

  it("GET /person/:id should return a person by id", async () => {
    const res = await supertest(app).get("/person/1");
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("id", 1);
  });

  it("GET /person/list?firstName=Mickey should filter by firstName", async () => {
    const res = await supertest(app).get("/person/list?firstName=Mickey");
    expect(res.statusCode).toBe(200);
    expect(res.body).toBeInstanceOf(Array);
    expect(res.body[0]).toHaveProperty("firstName", "Mickey");
  });

  it("POST /person should insert a new row", async () => {
    const newPerson = { firstName: "John", lastName: "Doe" };
    const res = await supertest(app).post("/person").send(newPerson);
    expect(res.statusCode).toBe(201);
    expect(res.body).toMatchObject(newPerson);
  });
});
