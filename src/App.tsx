import { Layout } from "antd";
import { useState } from "react";
import "./App.css";
import { SpendingForm, SpendingFormProps } from "./components/SpendingForm";
import { Spending } from "./types/spending";
import { SpendingTable } from "./components/SpendingTable";

const { Sider, Content } = Layout;

const SiderStyle: React.CSSProperties = {
  textAlign: "center",
  backgroundColor: "#fff",
  border: "1px solid black",
  padding: "10px",
};

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
          <SpendingTable spendings={spendings} />
        </Content>
      </Layout>
    </div>
  );
}

export default App;
