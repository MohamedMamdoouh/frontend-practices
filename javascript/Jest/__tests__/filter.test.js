const filter = require("../filter");

describe("Validate name", () => {
  test("check if name is empty", () => {
    expect(filter()).toBe("Unknown");
  });

  test.only("check if name is all invalid", () => {
    expect(filter("_@!-=")).toBe("Unknown");
  });

  test.only("trim trailing, leading spaces", () => {
    expect(filter("  Ahmed  ")).toBe("Ahmed");
  });

  test.skip("check if name > 10 chs and remove the rest method 1", () => {
    expect(filter("ahmed ali mohamed").length).toBe(10);
  });

  test.skip("check if name starts with _ and fix it", () => {
    expect(filter("_Ahmed")).toBe("Ahmed");
  });
});

// only => applied on test & describe, and it only test selected
// skip => applied on test & describe, and it ignores selected

//beforeA1l(() =>{
// Connect To Database
// Empty Testing Table
// Add Dummy Data For Testing
// Prepare  Everything Before Testing
//});

// afterA11(() => {
// Clean Database
// Clean Cache
//});

test.only("check if name > 10 chs and remove the rest method 2", () => {
  expect(filter("ahmed ali mohamed")).toHaveLength(10);
});
