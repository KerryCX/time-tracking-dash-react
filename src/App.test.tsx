import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import App from "./App";
import data from "./data.json";
import { PREVIOUS_LABEL } from "./constants";
import type { TimeFrame } from "./types";

// Cards render in data order, so the hours and comparison text can be checked
// against the data for every activity at once, with no reliance on layout.
const shownCurrentHours = (): (string | null)[] =>
  screen.getAllByText(/^\d+hrs$/).map((element) => element.textContent);

const shownPreviousHours = (): (string | null)[] =>
  screen
    .getAllByText(/^(Yesterday|Last Week|Last Month) - \d+hrs$/)
    .map((element) => element.textContent);

const expectedCurrent = (timeframe: TimeFrame): string[] =>
  data.map((activity) => `${activity.timeframes[timeframe].current}hrs`);

const expectedPrevious = (timeframe: TimeFrame): string[] =>
  data.map(
    (activity) =>
      `${PREVIOUS_LABEL[timeframe]} - ${activity.timeframes[timeframe].previous}hrs`,
  );

describe("App", () => {
  it("renders a card for every activity", () => {
    render(<App />);

    const titles = screen
      .getAllByRole("heading", { level: 3 })
      .map((heading) => heading.textContent);

    expect(titles).toEqual(data.map((activity) => activity.title));
  });

  it("starts on the weekly timeframe", () => {
    render(<App />);

    expect(screen.getByRole("button", { name: "weekly" })).toHaveAttribute(
      "aria-pressed",
      "true",
    );
    expect(shownCurrentHours()).toEqual(expectedCurrent("weekly"));
    expect(shownPreviousHours()).toEqual(expectedPrevious("weekly"));
  });

  it.each<TimeFrame>(["daily", "monthly"])(
    "switches every card to the %s figures",
    async (timeframe) => {
      const user = userEvent.setup();
      render(<App />);

      await user.click(screen.getByRole("button", { name: timeframe }));

      expect(screen.getByRole("button", { name: timeframe })).toHaveAttribute(
        "aria-pressed",
        "true",
      );
      expect(screen.getByRole("button", { name: "weekly" })).toHaveAttribute(
        "aria-pressed",
        "false",
      );
      expect(shownCurrentHours()).toEqual(expectedCurrent(timeframe));
      expect(shownPreviousHours()).toEqual(expectedPrevious(timeframe));
    },
  );

  it("returns to the weekly figures after switching away and back", async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.click(screen.getByRole("button", { name: "monthly" }));
    await user.click(screen.getByRole("button", { name: "weekly" }));

    expect(shownCurrentHours()).toEqual(expectedCurrent("weekly"));
  });
});
