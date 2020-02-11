import * as React from "react";
import "./styles.css";
import Counter from "./counter/Counter";
import countState from "./counter/CounterStore";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Counter store={countState} />
    </div>
  );
}
