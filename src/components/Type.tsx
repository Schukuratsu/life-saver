import { Radio, Form } from "antd";
import { TYPE_OPTIONS } from "../constants";

export function Type() {
  return (
    <Form.Item
      name="type"
      label="Tipo de gasto"
      rules={[{ required: true, message: "Este campo é obrigatório" }]}
      validateFirst
    >
      <Radio.Group>
        {TYPE_OPTIONS.map(({ value, label }) => (
          <Radio value={value}>{label}</Radio>
        ))}
      </Radio.Group>
    </Form.Item>
  );
}
