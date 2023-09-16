import request from "supertest";
import app from "../src/app";

describe("GET /Categorias", () => {
  test("should respond with a 200 status code", async () => {
    const response = await request(app).get("/Categorias").send();
    expect(response.statusCode).toBe(200);
  });

  test("should respond an array", async () => {
    const response = await request(app).get("/Categorias").send();
    expect(response.body).toBeInstanceOf(Array);
  });
});

describe("POST /Categorias", () => {
  describe("given a title and description", () => {
    const newCategoria = {
      title: "some title",
      description: "some description",
    };

    // should respond with a 200 code
    test("should respond with a 200 status code", async () => {
      const response = await request(app).post("/Categorias").send(newCategoria);
      expect(response.statusCode).toBe(200);
    });

    // should respond a json as a content type
    test("should have a Content-Type: application/json header", async () => {
      const response = await request(app).post("/Categorias").send(newCategoria);
      expect(response.headers["content-type"]).toEqual(
        expect.stringContaining("json")
      );
    });

    // shoud respond with a json object containing the new Categoria with an id
    test("should respond with an Categoria ID", async () => {
      const response = await request(app).post("/Categorias").send(newCategoria);
      expect(response.body.id).toBeDefined();
    });
  });

  describe("when the title and description is missing", () => {
    // should respond with a 400 code
    test("shoud respond with a 400 status code", async () => {
      const fields = [
        { title: "some title" },
        { description: "some description" },
      ];

      for (const body of fields) {
        const response = await request(app).post("/Categorias").send(body);
        expect(response.statusCode).toBe(400);
      }
    });
  });
});
