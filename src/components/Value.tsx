import { Form, InputNumber } from "antd";

export function Value() {
  return (
    <Form.Item
      name="value"
      label="Valor"
      initialValue={0}
      rules={[
        { required: true, message: "Este campo é obrigatório" },
        { min: 0, message: "o valor deve ser maior que 0" },
      ]}
      validateFirst
    >
      <InputNumber
        formatter={(value) =>
          `R$ ${value}`.replace(".", ",").replace(/\B(?=(\d{3})+(?!\d))/g, ".")
        }
        parser={(value) =>
          value!.replace(/R\$\s?|(\.*)/g, "").replace(",", ".")
        }
        precision={2}
      />
    </Form.Item>
  );
}
