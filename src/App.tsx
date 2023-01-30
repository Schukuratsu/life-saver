import { Form } from "antd";
import "./App.css";
import { Category } from "./components/Category";
import { DateOfSpending } from "./components/DateOfSpending";
import { Description } from "./components/Description";
import { SpendingType } from "./components/SpendingType";
import { Value } from "./components/Value";

function App() {
  const [form] = Form.useForm();
  return (
    <div className="App">
      <Form form={form}>
        <Category />
        <SpendingType />
        <Description />
        <DateOfSpending />
        <Value />
      </Form>
    </div>
  );
}

export default App;
