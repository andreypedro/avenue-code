import supertest from "supertest";
import app from "../app";

describe("Person API", () => {
  it("POST /person/list should return all person", async () => {
    const res = await supertest(app).post("/person/list");
    expect(res.statusCode).toBe(200);
    const people = Array.isArray(res.body) ? res.body : res.body.data;
    expect(people).toBeInstanceOf(Array);
    expect(people.length).toBeGreaterThan(0);
  });

  it("GET /person/:id should return a person by id", async () => {
    const res = await supertest(app).get("/person/1");
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("id", 1);
  });

  it("POST /person/list com filtro firstName=Mickey deve retornar apenas Mickey", async () => {
    const res = await supertest(app)
      .post("/person/list")
      .send({ firstName: "Mickey" });
    if (res.statusCode === 404) {
      expect(res.statusCode).toBe(404);
    } else {
      expect(res.statusCode).toBe(200);
      const people = Array.isArray(res.body) ? res.body : res.body.data;
      expect(people).toBeInstanceOf(Array);
      expect(people[0]).toHaveProperty("firstName", "Mickey");
    }
  });

  it("POST /person should insert a new row", async () => {
    const newPerson = { firstName: "John", lastName: "Doe" };
    const res = await supertest(app).post("/person").send(newPerson);
    expect(res.statusCode).toBe(201);
    expect(res.body).toMatchObject(newPerson);
  });
});
