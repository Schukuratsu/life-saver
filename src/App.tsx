import { Form } from "antd";
import "./App.css";
import { Category } from "./components/Category";
import { Description } from "./components/Description";
import { SpendingType } from "./components/SpendingType";

function App() {
  return (
    <div className="App">
      <Form>
        <Category />
        <SpendingType />
        <Description />
      </Form>
    </div>
  );
}

export default App;
