const {} = require("./index");

describe("my stack", () => {
  it("capitalise works", () => {
    expect(capitalise("test")).toBe("Test");
  });

  it("test analyseArray", () => {
    const testOjbect = {
      average: 3,
      min: 1,
      max: 5,
      length: 5,
    };

    expect(analyseArray([1, 2, 3, 4, 5])).toMatchObject;
  });
});
