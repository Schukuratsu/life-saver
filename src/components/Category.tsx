import { Select, Form } from "antd";

export function Category() {
  return (
    <Form.Item name="category" label="Categoria">
      <Select optionLabelProp="Categoria">
        <Select.Option value="saude">Saúde</Select.Option>
        <Select.Option value="transporte">Transporte</Select.Option>
        <Select.Option value="alimentacao">Alimentação</Select.Option>
        <Select.Option value="entretenimento">Entretenimento</Select.Option>
      </Select>
    </Form.Item>
  );
}
