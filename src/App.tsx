import { Form } from "antd";
import "./App.css";
import { Category } from "./components/Category";

function App() {
  return (
    <div className="App">
      <Form>
        <Category />
      </Form>
    </div>
  );
}

export default App;
