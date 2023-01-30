import { Form, InputNumber } from "antd";
import { formatValue, parseValue } from "../utils/valueUtils";

export function Value() {
  return (
    <Form.Item
      name="value"
      label="Valor"
      initialValue={0}
      rules={[
        { required: true, message: "Este campo é obrigatório" },
        {
          pattern: /good/,
          message: "o valor deve ser maior que 0",
          transform(value) {
            return Number(value) > 0 ? "good" : "bad";
          },
        },
      ]}
      validateFirst
    >
      <InputNumber formatter={(v)=>formatValue(v, true)} parser={parseValue} precision={2} />
    </Form.Item>
  );
}
