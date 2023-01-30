import { Button, Form, FormProps, Layout, Table, TableProps } from "antd";
import { useState } from "react";
import "./App.css";
import { Category } from "./components/Category";
import { DateField } from "./components/DateField";
import { Description } from "./components/Description";
import { Type } from "./components/Type";
import { Value } from "./components/Value";
import { Dayjs } from "dayjs";
import { DATE_FORMAT } from "./constants";

const { Sider, Content } = Layout;

const SiderStyle: React.CSSProperties = {
  textAlign: "center",
  backgroundColor: "#fff",
  border: "1px solid black",
  padding: "10px",
};

type Spending = {
  category: string;
  type: string;
  description: string;
  dateField: Dayjs;
  value: number;
};

const columns: TableProps<Spending>["columns"] = [
  { title: "Categoria", dataIndex: "category", key: "category" },
  { title: "Tipo", dataIndex: "type", key: "type" },
  { title: "Descrição", dataIndex: "description", key: "description" },
  {
    title: "Data",
    dataIndex: "date",
    key: "date",
    render(value: Dayjs, record, index) {
      return value.format(DATE_FORMAT);
    },
  },
  { title: "Valor", dataIndex: "value", key: "value" },
];

function App() {
  const [form] = Form.useForm<Spending>();

  const [spendings, setSpendings] = useState<Spending[]>([]);

  const handleFinish: FormProps["onFinish"] = (values) => {
    setSpendings((v) => [...v, values]);
  };

  return (
    <div className="App">
      <Layout>
        <Sider style={SiderStyle} width={450}>
          <Form form={form} onFinish={handleFinish}>
            <Category />
            <Type />
            <Description />
            <DateField />
            <Value />
            <Button type="primary" htmlType="submit">
              Salvar
            </Button>
          </Form>
        </Sider>
        <Content>
          <Table<Spending> columns={columns} dataSource={spendings} />
        </Content>
      </Layout>
    </div>
  );
}

export default App;
