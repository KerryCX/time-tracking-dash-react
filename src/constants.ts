import { TimeFrame } from "./types";

export const CATEGORY_COLORS: Record<string, string> = {
  Work: "bg-yellow-500",
  Play: "bg-blue-300",
  Study: "bg-pink-400",
  Exercise: "bg-green-200",
  Social: "bg-purple-600",
  "Self Care": "bg-yellow-300",
};

export const PREVIOUS_LABEL: Record<TimeFrame, string> = {
  daily: "Yesterday",
  weekly: "Last Week",
  monthly: "Last Month",
};
