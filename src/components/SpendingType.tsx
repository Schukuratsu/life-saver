import { Radio, Form } from "antd";

export function SpendingType() {
  return (
    <Form.Item
      name="spendingType"
      label="Tipo de gasto"
      rules={[{ required: true, message: "Este campo é obrigatório" }]}
      validateFirst
    >
      <Radio.Group>
        <Radio value="recurring">Recorrente</Radio>
        <Radio value="unique">Único</Radio>
        <Radio value="emergency">Emergencial</Radio>
      </Radio.Group>
    </Form.Item>
  );
}
