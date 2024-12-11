import { getMpn } from "@/util/mpn.lookup";

describe("getMpn", () => {
  it("returns correct MPN for QuantiTray", () => {
    let result = getMpn("qt", { large: 10, small: 0 });
    expect(result).toEqual([11.1, 6.1, 20.5]);
    result = getMpn("qt", { large: 0, small: 0 });
    expect(result).toEqual(["< 1.0", 0, 3.7]);
    result = getMpn("qt", { large: 51, small: 0 });
    expect(result).toEqual(["> 200.5", 146.1, "Infinite"]);
  });

  it("returns correct MPN for QuantiTray2000", () => {
    const result = getMpn("qt2k", { large: 10, small: 5 });
    expect(result).toEqual([16.6, 9.6, 26.8]);
  });

  it("returns correct MPN for Legiolert", () => {
    const result = getMpn("legio", { large: 5, small: 5 });
    expect(result).toEqual(19.4);
  });

  it("returns undefined for invalid value input", () => {
    for (let type of ["qt", "qt2k", "legio"]) {
      let result = getMpn(type, { large: 55, small: 0 });
      expect(result).toBeUndefined();
    }
  });
});
