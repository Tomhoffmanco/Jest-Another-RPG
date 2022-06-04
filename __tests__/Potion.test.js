const Potion = require("../lib/Potion.js");

test("creates a health potion object", () => {
  const potion = new Potion("health");

  expect(potion.name).toBe("health");
  expect(potion.value).toEqual(expect.any(Number));
});

// Note that this time, we won't check to see if the potion has the name value of health. If we wanted to, we could have written a test that checks to see if name is health, strength, or agility.

test("creates a random potion object", () => {
  const potion = new Potion();

  expect(potion.name).toEqual(expect.any(String));
  expect(potion.name.length).toBeGreaterThan(0);
  expect(potion.value).toEqual(expect.any(Number));
});
