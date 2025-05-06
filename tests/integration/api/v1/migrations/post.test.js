import database from "infra/database.js";

beforeAll(cleanDatabase);
async function cleanDatabase() {
  await database.query("DROP SCHEMA public cascade;CREATE SCHEMA public");
}

test("POST to /api/v1/migrations should return 200", async () => {
  const postResponse1 = await fetch("http://localhost:3000/api/v1/migrations", {
    method: 'POST'
  });
  expect(postResponse1.status).toBe(201);

  const postResponse2 = await fetch("http://localhost:3000/api/v1/migrations", {
    method: 'POST'
  });
  expect(postResponse2.status).toBe(200);
  const responseBody2 = await postResponse2.json();
  expect(Array.isArray(responseBody2)).toBe(true);
  expect(responseBody2.length).toBe(0);
});
