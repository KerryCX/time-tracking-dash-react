export type TimeFrame = "daily" | "weekly" | "monthly";

export interface TimeFrameData {
  current: number;
  previous: number;
}

export interface Activity {
  title: string;
  timeframes: Record<TimeFrame, TimeFrameData>;
}
