const arr = require("../arr");

describe("validate arr", () => {
  test("does arr contain number 3", () => {
    expect(arr).toContain(3);
  });

  test("doesn't arr contain number 7 method 1", () => {
    expect(arr).not.toContain(7);
  });

  test("doesn't arr contain number 7 method 2", () => {
    for (const element of arr) {
      expect(element).not.toBe(7);
    }
  });

  test("check if arr contain only numbers", () => {
    for (const element of arr) {
      expect(Number.isNaN(element)).toBe(false);
    }
  });

  test("check if arr contain only numbers", () => {
    for (const element of arr) {
      expect(Number.isNaN(element)).toBeFalsy();
    }
  });

  test("check if arr contain only numbers", () => {
    for (const element of arr) {
      expect(Number.isNaN(element)).not.toBeTruthy();
    }
  });

  test("check if first element > last element", () => {
    expect(arr[0]).toBeGreaterThan(0);
  });

  test("check if last element < first element", () => {
    expect(arr.at(-1)).toBeLessThan(arr[0]);
  });
});

describe("various tests", () => {
  test("check for undefined", () => {
    let a;
    expect(a).toBeUndefined();
  });

  test("check a substring in a string using RegExp", () => {
    let name = "Ahmed Ali Mohamed";
    expect(name).toMatch(/ali/i);
  });

  test("check a property in an object", () => {
    let obj = {
      name: "Mohamed",
      age: 25,
    };
    expect(obj).toHaveProperty("name");
  });

  test("check a property in an object value", () => {
    let obj = {
      name: "Mohamed",
      age: 25,
    };
    expect(obj).toHaveProperty("age", 25);
  });
});

expect.extend({
  toBeLargerThan(received, target) {
    const pass = received > target;
    if (pass) {
      return {
        message: () => `Expected ${received} to be larger than ${target}`,
        pass: true,
      };
    } else {
      return {
        message: () =>
          `Error: Expected ${received} to be larger than ${target}`,
        pass: false,
      };
    }
  },
});

test("is larger than", () => {
  expect(15).toBeLargerThan(10);
});

expect.extend({
  toBeBetween(received, start, end) {
    const pass = received >= start && received <= end;
    if (pass) {
      return {
        message: () => `Expected ${received} to be between ${start} and ${end}`,
        pass: true,
      };
    } else {
      return {
        message: () =>
          `Error: Expected ${received} to be between ${start} and ${end}`,
        pass: false,
      };
    }
  },
});

test("is number between", () => {
  expect(1950).toBeBetween(1900, 2000);
});

test("expect anything", () => {
  // let x;
  expect("Ahmed").toEqual(expect.anything());
  expect(10).toEqual(expect.anything());
  expect([1, 2, 3]).toEqual(expect.anything());
  // expect(x).toEqual(expect.anything());
});

test("expect any constructor", () => {
  expect("Ahmed").toEqual(expect.any(String));
  expect(10).toEqual(expect.any(Number));
  // expect("Ali").toEqual(expect.any(Object));
});

test("expect arrayContaining", () => {
  const arr = [1, 2, 3, 4, 5];
  expect(arr).toEqual(expect.arrayContaining([1, 5]));
});
