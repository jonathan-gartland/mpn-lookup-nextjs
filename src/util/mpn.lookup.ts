// MPN lookups come from the mpn-lookup package, which holds the constant IDEXX tables
// (and a checksum test that fails if any value changes). This keeps the app's getMpn API.
import { getQt2KMpn, getQtLegio, getQtMpn, type Mpn } from "mpn-lookup";

type Counts = { large: number; small: number };

// QuantiTray and QuantiTray/2000 return [mpn, lower, upper]; Legiolert returns a single value.
export function getMpn(testType: "qt" | "qt2k", inCount: Counts): Mpn;
export function getMpn(
  testType: "legio",
  inCount: Counts
): string | number | undefined;
export function getMpn(
  testType: string,
  inCount: Counts
): Mpn | string | number | undefined;
export function getMpn(testType: string, inCount: Counts) {
  return testType === "qt"
    ? getQtMpn(inCount.large)
    : testType === "qt2k"
      ? getQt2KMpn(inCount.large, inCount.small)
      : testType === "legio"
        ? getQtLegio(inCount.large, inCount.small)
        : undefined;
}
