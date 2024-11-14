import { ageGroupColorPick } from "./ageGroupColorPick";

describe("ageGroupColorPick", () => {
  it.each([
    { groupAge: "L", expected: "bg-[#66b331]" },
    { groupAge: "10", expected: "bg-[#3cc0ef]" },
    { groupAge: "12", expected: "bg-[#f5ce11]" },
    { groupAge: "14", expected: "bg-[#ec6718]" },
    { groupAge: "16", expected: "bg-[#e41421]" },
    { groupAge: "18", expected: "bg-[#050608]" }
  ])(
    "Should be able to return bgColor class $expected when group age is $groupAge",
    ({ groupAge, expected }) => {
      const result = ageGroupColorPick[groupAge];

      expect(result).toBe(expected);
    }
  );
});
