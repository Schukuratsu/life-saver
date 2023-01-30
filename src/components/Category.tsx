import { Select, Form } from "antd";

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
        <Select.Option value="health">Saúde</Select.Option>
        <Select.Option value="transportation">Transporte</Select.Option>
        <Select.Option value="food">Alimentação</Select.Option>
        <Select.Option value="entertainment">Entretenimento</Select.Option>
      </Select>
    </Form.Item>
  );
}
