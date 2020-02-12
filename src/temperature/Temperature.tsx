import { observer } from "mobx-react";
import * as React from "react";
// import * as ReactDOM from "react-dom";
// import { observable } from "mobx";
// import { Component } from "react";

const Temperature = observer(({ temperatures }) => {
  // render
  return (
    <div>
      <h1>Temperature</h1>
      <div>
        {[...temperatures.entries()].map(([city, temperature]) => {
          return (
            <div key={city + temperature}>
              {city}: {temperature.temperature}
            </div>
          );
        })}
      </div>
    </div>
  );
});

export default Temperature;

/*
  for (let [key, value] of temperatures.entries()) {
    console.log(key + " = " + value.temperature);
  }
  [...temperatures.entries()].map(([key, value]: [string, any]) =>
    console.log(key, value)
  );

*/
