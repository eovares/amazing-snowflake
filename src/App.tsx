import * as React from "react";
import "./styles.css";
import Counter from "./counter/Counter";
import countState from "./counter/CounterStore";
import Temperature from "./temperature/Temperature";
import temperatureByCity from "./temperature/TemperatureMapStore";

// import DevTools from "mobx-react-devtools";
// <DevTools />

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Counter store={countState} />
      <Temperature temperatures={temperatureByCity} />
    </div>
  );
}
