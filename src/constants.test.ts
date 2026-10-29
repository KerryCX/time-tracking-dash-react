import { describe, expect, it } from "vitest";
import { CATEGORY_COLORS, PREVIOUS_LABEL } from "./constants";
import data from "./data.json";
import type { TimeFrame } from "./types";

describe("PREVIOUS_LABEL", () => {
  it.each<[TimeFrame, string]>([
    ["daily", "Yesterday"],
    ["weekly", "Last Week"],
    ["monthly", "Last Month"],
  ])("labels the %s comparison as %s", (timeframe, label) => {
    expect(PREVIOUS_LABEL[timeframe]).toBe(label);
  });
});

describe("CATEGORY_COLORS", () => {
  // A category with no colour would render the class name "undefined", so
  // every title in the data must have a matching colour.
  it.each(data.map((activity) => activity.title))(
    "has a colour for the %s category",
    (title) => {
      expect(CATEGORY_COLORS[title]).toMatch(/^bg-/);
    },
  );
});
