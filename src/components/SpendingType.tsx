import { Radio, Form } from "antd";

export function SpendingType() {
  return (
    <Form.Item name="spendingType" label="Tipo de gasto">
      <Radio.Group>
        <Radio value="recurring">Recorrente</Radio>
        <Radio value="unique">Único</Radio>
        <Radio value="emergency">Emergencial</Radio>
      </Radio.Group>
    </Form.Item>
  );
}
