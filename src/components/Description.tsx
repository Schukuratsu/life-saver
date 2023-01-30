import { Form, Input } from "antd";

export function Description() {
  return (
    <Form.Item
      name="description"
      label="Descrição"
      rules={[
        { max: 50, message: "Descrição não pode ser maior que 50 caracteres" },
      ]}
      required
    >
      <Input />
    </Form.Item>
  );
}
