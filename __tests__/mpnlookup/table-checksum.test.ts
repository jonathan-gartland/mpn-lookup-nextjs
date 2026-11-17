import { createHash } from "node:crypto";
import {
  MAX_2K_LARGE_POS,
  MAX_2K_SMALL_POS,
  MAX_LEGIO_LARGE_POS,
  MAX_LEGIO_SMALL_POS,
  MAX_QT_MPN_INDEX,
} from "mpn-lookup";
import { getMpn } from "@/util/mpn.lookup";

// The MPN tables are transcribed from the IDEXX PDFs and must never change.
// Same fingerprint as mpn-lookup's own test/table-checksum.test.ts, computed through the
// app's getMpn, so a dependency update or wrapper change that alters any result fails here.
// Do not update EXPECTED to make this pass.
const EXPECTED =
  "ee39c7ab82192c1a2b09f9b57dd5956372e0cccb20b2204e61d2fa4da48aac7a";

describe("MPN table data", () => {
  it("matches the published IDEXX tables (checksum)", () => {
    const results: unknown[] = [
      MAX_QT_MPN_INDEX,
      MAX_2K_LARGE_POS,
      MAX_2K_SMALL_POS,
      MAX_LEGIO_LARGE_POS,
      MAX_LEGIO_SMALL_POS,
    ];
    for (let i = -1; i <= MAX_QT_MPN_INDEX + 1; i++) {
      results.push(["qt", i, getMpn("qt", { large: i, small: 0 })]);
    }
    for (let l = -1; l <= MAX_2K_LARGE_POS + 1; l++) {
      for (let s = -1; s <= MAX_2K_SMALL_POS + 1; s++) {
        results.push(["qt2k", l, s, getMpn("qt2k", { large: l, small: s })]);
      }
    }
    for (let l = -1; l <= MAX_LEGIO_LARGE_POS + 1; l++) {
      for (let s = -1; s <= MAX_LEGIO_SMALL_POS + 1; s++) {
        results.push(["legio", l, s, getMpn("legio", { large: l, small: s })]);
      }
    }
    const hash = createHash("sha256")
      .update(JSON.stringify(results))
      .digest("hex");
    expect(hash).toBe(EXPECTED);
  });
});
