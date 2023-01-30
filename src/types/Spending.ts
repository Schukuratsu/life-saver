import { Dayjs } from "dayjs";

export type Spending = {
  category: string;
  type: string;
  description: string;
  dateField: Dayjs;
  value: number;
};
