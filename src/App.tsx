import { Button, Form, Layout } from "antd";
import "./App.css";
import { Category } from "./components/Category";
import { DateOfSpending } from "./components/DateOfSpending";
import { Description } from "./components/Description";
import { SpendingType } from "./components/SpendingType";
import { Value } from "./components/Value";

const { Sider, Content } = Layout;

const SiderStyle: React.CSSProperties = {
  textAlign: "center",
  backgroundColor: "#fff",
  border: "1px solid black",
  padding: "10px",
};

function App() {
  const [form] = Form.useForm();
  return (
    <div className="App">
      <Layout>
        <Sider style={SiderStyle} width={450}>
          <Form form={form} onFinish={console.log}>
            <Category />
            <SpendingType />
            <Description />
            <DateOfSpending />
            <Value />
            <Button type="primary" htmlType="submit">
              Salvar
            </Button>
          </Form>
        </Sider>
        <Content></Content>
      </Layout>
    </div>
  );
}

export default App;
