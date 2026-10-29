import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { NavBar } from "./NavBar";
import type { TimeFrame } from "../types";

const renderNavBar = (timeframe: TimeFrame = "weekly") => {
  const onTimeFrameChange = vi.fn();
  render(
    <NavBar timeframe={timeframe} onTimeFrameChange={onTimeFrameChange} />,
  );
  return { onTimeFrameChange };
};

describe("NavBar", () => {
  it("identifies the user the report is for", () => {
    renderNavBar();

    expect(screen.getByText("Report for")).toBeInTheDocument();
    expect(screen.getByAltText("Jeremy Robson")).toBeInTheDocument();
  });

  it("offers daily, weekly and monthly as buttons", () => {
    renderNavBar();

    expect(screen.getAllByRole("button").map((b) => b.textContent)).toEqual([
      "daily",
      "weekly",
      "monthly",
    ]);
  });

  it.each<TimeFrame>(["daily", "weekly", "monthly"])(
    "marks only %s as pressed when it is selected",
    (selected) => {
      renderNavBar(selected);

      for (const name of ["daily", "weekly", "monthly"]) {
        expect(screen.getByRole("button", { name })).toHaveAttribute(
          "aria-pressed",
          String(name === selected),
        );
      }
    },
  );

  it.each<TimeFrame>(["daily", "weekly", "monthly"])(
    "reports %s when that button is clicked",
    async (target) => {
      const user = userEvent.setup();
      const { onTimeFrameChange } = renderNavBar("weekly");

      await user.click(screen.getByRole("button", { name: target }));

      expect(onTimeFrameChange).toHaveBeenCalledWith(target);
    },
  );

  it("can be operated from the keyboard", async () => {
    const user = userEvent.setup();
    const { onTimeFrameChange } = renderNavBar("weekly");

    await user.tab();
    await user.keyboard("{Enter}");

    expect(onTimeFrameChange).toHaveBeenCalledWith("daily");
  });
});
