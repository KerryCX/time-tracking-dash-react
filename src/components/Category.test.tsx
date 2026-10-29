import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Category } from "./Category";
import type { Activity, TimeFrame } from "../types";

const activity: Activity = {
  title: "Work",
  timeframes: {
    daily: { current: 5, previous: 7 },
    weekly: { current: 32, previous: 36 },
    monthly: { current: 103, previous: 128 },
  },
};

describe("Category", () => {
  it("shows the activity title as a heading", () => {
    render(<Category activity={activity} timeframe="weekly" />);

    expect(screen.getByRole("heading", { name: "Work" })).toBeInTheDocument();
  });

  it.each<[TimeFrame, string, string]>([
    ["daily", "5hrs", "Yesterday - 7hrs"],
    ["weekly", "32hrs", "Last Week - 36hrs"],
    ["monthly", "103hrs", "Last Month - 128hrs"],
  ])(
    "shows the current and previous hours for the %s timeframe",
    (timeframe, current, previous) => {
      render(<Category activity={activity} timeframe={timeframe} />);

      expect(screen.getByText(current)).toBeInTheDocument();
      expect(screen.getByText(previous)).toBeInTheDocument();
    },
  );

  it("shows zero hours rather than hiding them", () => {
    render(
      <Category
        activity={{
          title: "Study",
          timeframes: {
            daily: { current: 0, previous: 1 },
            weekly: { current: 0, previous: 0 },
            monthly: { current: 0, previous: 0 },
          },
        }}
        timeframe="daily"
      />,
    );

    expect(screen.getByText("0hrs")).toBeInTheDocument();
  });

  it("gives the options button a name that identifies its category", () => {
    render(<Category activity={activity} timeframe="weekly" />);

    expect(
      screen.getByRole("button", { name: "More options for Work" }),
    ).toBeInTheDocument();
  });
});
