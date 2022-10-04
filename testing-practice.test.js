const stringLength = require("./string-length.js");
const stringReverse = require("./reverse-string.js");
const Calculator = require("./calculator.js");
const capitalize = require("./capitalize.js");

test("String length function works?", () => {
  expect(stringLength("hello")).toBe(5);
  expect(stringLength("Ohemaa")).toBe(6);
});

test("string is at least one character or more than ten characters long", () => {
  expect(() => stringLength("OhemaaAdwoaHello")).toThrow("Out of range");
});

test("String reversed", () => {
  expect(stringReverse("foo")).toBe("oof");
  expect(stringReverse("oven")).toBe("nevo");
});

describe("Test add function", () => {
  test("add positive numbers", () => {
    expect(Calculator.add(2, 3)).toBe(5);
  });

  test("add negative and positive number", () => {
    expect(Calculator.add(3, -2)).toBe(1);
  });

  test("add negative numbers", () => {
    expect(Calculator.add(-2, -3)).toBe(-5);
  });
});

describe("Test subtract function", () => {
  test("subtract positive numbers", () => {
    expect(Calculator.substract(3, 2)).toBe(1);
  });

  test("subtract negative numbers", () => {
    expect(Calculator.substract(-2, -3)).toBe(1);
  });
});

describe("Test divide function", () => {
  test("divide by zero", () => {
    expect(Calculator.divide(2, 0)).toBe(Infinity);
  });

  test("divide zero", () => {
    expect(Calculator.divide(0, 2)).toBe(0);
  });

  test("obtain decimal numbers", () => {
    expect(Calculator.divide(1, 2)).toBe(0.5);
  });
});

describe("Test multiply function", () => {
  test("multipy by zero", () => {
    expect(Calculator.multiply(2, 0)).toBe(0);
  });

  test("multipy negatives", () => {
    expect(Calculator.multiply(-2, -2)).toBe(4);
  });

  test("multipy negative and positive", () => {
    expect(Calculator.multiply(2, -2)).toBe(-4);
  });
});

describe("TDD test run, test Capitalize function", () => {
  test("capitalize every word", () => {
    expect(capitalize("microverse rocks")).toBe("Microverse rocks");
  });
});
