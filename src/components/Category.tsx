import { Select, Form } from "antd";
import { CATEGORY_OPTIONS } from "../constants";

export function Category() {
  return (
    <Form.Item
      name="category"
      label="Categoria"
      required
      rules={[{ required: true, message: "Este campo é obrigatório" }]}
      validateFirst
    >
      <Select>
        {CATEGORY_OPTIONS.map(({ value, label }) => (
          <Select.Option value={value}>{label}</Select.Option>
        ))}
      </Select>
    </Form.Item>
  );
}
