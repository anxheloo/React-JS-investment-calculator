import "./App.css";
import { useState } from "react";
import Header from "./components/Header/Header";
import InputBox from "./components/InputBox/InputBox";
import Table from "./components/Table/Table";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  return (
    <div className="App">
      <Header></Header>
      <InputBox userInput={userInput} setUserInput={setUserInput}></InputBox>
      <Table userInput={userInput}></Table>
    </div>
  );
}

export default App;
