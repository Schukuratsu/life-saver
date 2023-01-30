import { Form, DatePicker } from "antd";
import dayjs from "dayjs";
import { DATE_FORMAT } from "../constants";

export function DateField() {
  return (
    <Form.Item
      name="date"
      label="Data"
      initialValue={dayjs(new Date())}
      rules={[{ required: true, message: "Este campo é obrigatório" }]}
      validateFirst
    >
      <DatePicker format={DATE_FORMAT} />
    </Form.Item>
  );
}
