import logo from "./logo.svg";
import "./App.css";
import { GreetingClass, Greeting } from "./components";
import { useState } from "react";

function App() {
  const [name, setName] = useState("Fede");
  function onClick() {
    setName("Agus");
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <GreetingClass name="Fede" /> */}
        <Greeting name={name} />
        <br />
        <button onClick={onClick}>Change Name</button>
      </header>
      <footer className="App-footer">
        <p>React Bootcamp 2022</p>
      </footer>
    </div>
  );
}

export default App;
