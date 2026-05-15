const say = require("../say");

test("Function to return hello message", () => {
  expect(say()).toBe("Hello world");
});
