import { Form, Button, FormProps } from "antd";
import { Spending } from "../types/Spending";
import { Category } from "./Category";
import { DateField } from "./DateField";
import { Description } from "./Description";
import { Type } from "./Type";
import { Value } from "./Value";

export type SpendingFormProps = {
    onFinish: FormProps['onFinish']
}

export function SpendingForm(props: SpendingFormProps) {
  const [form] = Form.useForm<Spending>();

  return (
    <Form form={form} onFinish={props.onFinish}>
      <Category />
      <Type />
      <Description />
      <DateField />
      <Value />
      <Button type="primary" htmlType="submit">
        Salvar
      </Button>
    </Form>
  );
}
