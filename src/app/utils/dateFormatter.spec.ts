import { dateFormatter } from "./dateFormatter";

describe("dateFormatter", () => {
  it("Should be able to format a valid date into dd/MM/yyyy format", () => {
    const result = dateFormatter("2024-11-14");

    expect(result).toBe("14/11/2024");
  });

  it("Should return invalid format for an incorrect date string", () => {
    const result = dateFormatter("invalid-date");

    expect(result).toBe("Invalid date");
  });
});
