import { Layout, Table, TableProps } from "antd";
import { useState } from "react";
import "./App.css";
import { Dayjs } from "dayjs";
import { DATE_FORMAT } from "./constants";
import { SpendingForm, SpendingFormProps } from "./components/SpendingForm";
import { Spending } from "./types/Spending";

const { Sider, Content } = Layout;

const SiderStyle: React.CSSProperties = {
  textAlign: "center",
  backgroundColor: "#fff",
  border: "1px solid black",
  padding: "10px",
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

  const [spendings, setSpendings] = useState<Spending[]>([]);

  const handleFinish: SpendingFormProps['onFinish'] = (values) => {
    setSpendings((v) => [...v, values]);
  };

  return (
    <div className="App">
      <Layout>
        <Sider style={SiderStyle} width={450}>
          <SpendingForm onFinish={handleFinish} />
        </Sider>
        <Content>
          <Table<Spending> columns={columns} dataSource={spendings} />
        </Content>
      </Layout>
    </div>
  );
}

export default App;
