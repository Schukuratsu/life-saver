import { Form } from "antd";
import "./App.css";
import { Category } from "./components/Category";
import { SpendingType } from "./components/SpendingType";

function App() {
  return (
    <div className="App">
      <Form>
        <Category />
        <SpendingType />
      </Form>
    </div>
  );
}

export default App;
