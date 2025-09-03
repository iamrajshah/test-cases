const request = require("supertest");
// const app = require("./app");
const {app, brokenSum} = require("./app");

test("GET /sum returns sum of two numbers", async () => {
  const res = await request(app).get("/sum?a=2&b=3");
  expect(res.statusCode).toBe(200);
  expect(res.body.result).toBe(5);
});

test("GET /brokenSum returns sum of two numbers", async () => {
  const res = await request(app).get("/concat?a=2&b=3");
  expect(res.statusCode).toBe(200);
  expect(res.body.result).toBe('23');
});

test("adds two numbers correctly", () => {
  expect(brokenSum(2, 3)).toBe('23');
});