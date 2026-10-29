import { describe, expect, it } from "vitest";
import data from "./data.json";

const TIMEFRAMES = ["daily", "weekly", "monthly"] as const;

describe("activity data", () => {
  it("has six uniquely named activities", () => {
    const titles = data.map((activity) => activity.title);

    expect(titles).toHaveLength(6);
    expect(new Set(titles).size).toBe(titles.length);
  });

  it.each(data.map((activity) => [activity.title, activity] as const))(
    "%s has non-negative hours for every timeframe",
    (_title, activity) => {
      for (const timeframe of TIMEFRAMES) {
        const { current, previous } = activity.timeframes[timeframe];

        expect(current).toBeGreaterThanOrEqual(0);
        expect(previous).toBeGreaterThanOrEqual(0);
      }
    },
  );
});
