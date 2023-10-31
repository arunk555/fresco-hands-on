const request = require("supertest");
const app = require("../app");
const md5 = require("md5");
const fs = require("fs");

//updating a user profile
test("Updating a user", async () => {
  await request(app)
    .patch("/edit/1")
    .send({
      name: "updated name",
    })
    .expect(200);
  setTimeout(() => {
    const data = JSON.parse(fs.readFileSync("../post.json"));
    expect(data.length).toBe(5);
    expect(data[0].name).toBe("updated name");
  }, 1000);
});

// // posting a data
test("Posting a new data", async () => {
  await request(app)
    .post("/add")
    .send({
      id: "5",
      name: "user new",
      age: "36",
      gender: "Female",
      email: "usernew@gmail.com",
    })
    .expect(200);
  setTimeout(() => {
    const data = JSON.parse(fs.readFileSync("../post.json"));
    expect(data.length).toBe(5);
  }, 1000);
});

//checking the get route
test("Getting all the user data", async () => {
  const response = await request(app).get("/view").expect(200);
  expect(response.body.length).toBe(4);
  expect(md5(response.body)).toBe("f1d3ff8443297732862df21dc4e57262");
});

//getting profile of a user based on id
test("Getting a single user data", async () => {
  const response = await request(app).get("/view?id=2").expect(200);
  expect(response.body.length).toBe(1);
  expect(md5(response.body)).toBe("93b885adfe0da089cdf634904fd59f71");
});
