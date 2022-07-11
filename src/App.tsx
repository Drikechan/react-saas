import React from "react";
import { Button } from "antd";
import "./App.css";
import { TestFlex } from "./components/index";
import "tailwindcss/tailwind.css";

function App() {
  return (
    <div className="App flex">
      <Button type="primary">1111</Button>
      <TestFlex />
      <div>1</div>
      <div>2</div>
    </div>
  );
}

export default App;
