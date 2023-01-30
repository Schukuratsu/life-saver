import { Form, DatePicker } from "antd";
import dayjs from "dayjs";
import { dateFormat } from "../constants";

export function DateOfSpending() {
  return (
    <Form.Item
      name="dateOfSpending"
      label="Data do gasto"
      initialValue={dayjs(new Date())}
      required
    >
      <DatePicker format={dateFormat} />
    </Form.Item>
  );
}
