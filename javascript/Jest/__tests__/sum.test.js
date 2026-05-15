const sum = require("../sum");

describe("sum all numbers", () => {
  test("function to return 0 if none", () => {
    expect(sum()).toBe(0);
  });

  describe("some category", () => {
    test("function to sum one number", () => {
      expect(sum(15)).toBe(15);
    });

    test("function to sum two numbers", () => {
      expect(sum(15, 5)).toBe(20);
    });
  });

  test("function to sum three numbers", () => {
    expect(sum(15, 5, 10)).toBe(30);
  });

  test("function to sum four numbers", () => {
    expect(sum(15, 5, 10, 5)).toBe(35);
  });
});
