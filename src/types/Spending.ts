import { Dayjs } from "dayjs";

export type Spending = {
  category: string;
  type: string;
  description: string;
  date: Dayjs;
  value: number;
};
