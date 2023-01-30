import { Form, InputNumber } from "antd";

export function Value() {
  return (
    <Form.Item name="value" label="Valor" required initialValue={0}>
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
