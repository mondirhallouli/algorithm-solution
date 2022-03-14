/*
  challenge from edabit: https://edabit.com/challenge/tYHkTdFrEmWfxpPKF

  =========== EXPLANATION =============
  A matchstick house is built with 6 matches if there is only one. in case of multiple houses(side by side), they will share one matchstick (wall) between them instead of each having its own matchstick (so with each matchstick house added we need to take off one matchstick from the previous house). so 1 house has 6 matchsticks, 2 houses will have 11 matchsticks, 3 will have 16...
*/

function matchHouses(numHouses) {
  let matchsticks = 0;
  let base = 6;
  if (numHouses === undefined || numHouses === null ||
    typeof numHouses === "boolean" ||
    typeof numHouses === "string" || numHouses < 0) return "invalid number of houses";
  if (numHouses === 0) return 0;
  if (numHouses === 1) return base;
  if (numHouses > 1) {
    matchsticks = numHouses * base - (numHouses - 1);
  }
  return matchsticks;
}

// ======= TESTS - VALID INPUTS =========
describe("when we have a valid input", () => {
  test("when we have zero houses", () => {
    expect(matchHouses(0)).toBe(0);
  });

  test("when we have 1 house", () => {
    expect(matchHouses(1)).toBe(6);
  });

  test("when we have 2 houses", () => {
    expect(matchHouses(2)).toBe(11);
  });

  test("when we have 3 houses", () => {
    expect(matchHouses(3)).toBe(16);
  });

  test("when we have 4 houses", () => {
    expect(matchHouses(4)).toBe(21);
  });

  test("when we have 87 houses", () => {
    expect(matchHouses(87)).toBe(436);
  });
});

// ====== TESTS - INVALID INPUTS =======
describe("when we have invalid inputs", () => {
  test("negative", () => {
    expect(matchHouses(-8)).toBe("invalid number of houses");
  });

  test("null", () => {
    expect(matchHouses(null)).toBe("invalid number of houses");
  });

  test("undefined", () => {
    expect(matchHouses(undefined)).toBe("invalid number of houses");
  });

  test("boolean", () => {
    expect(matchHouses(true)).toBe("invalid number of houses");
    expect(matchHouses(false)).toBe("invalid number of houses");
  });

  test("string", () => {
    expect(matchHouses("4")).toBe("invalid number of houses");
    expect(matchHouses("four")).toBe("invalid number of houses");
  });
});