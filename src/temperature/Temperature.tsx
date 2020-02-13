import { observer } from 'mobx-react';
import * as React from 'react';
// import * as ReactDOM from "react-dom";
// import { observable } from "mobx";
// import { Component } from "react";

const Temperature = observer(({ temperaturesMap, temperaturesArray }) => {
  // render
  return (
    <div>
      <h2>Temperature</h2>
      <TViewByMap temperatures={temperaturesMap} />
      <TViewByArray temperatures={temperaturesArray} />
    </div>
  );
});

// Display mapper temperatures
const TViewByMap = observer(({ temperatures }) => {
  // render
  return (
    <>
      <h3>Map</h3>
      <ul>
        {[...temperatures.entries()].map(([city, temperature]) => {
          return (
            <li key={city + temperature}>
              {city}: {temperature.temperature}
            </li>
          );
        })}
      </ul>
    </>
  );
});

// Display array temperatures
const TViewByArray = observer(({ temperatures }) => {
  // render
  return (
    <>
      <h3>Array</h3>
      <p> Increment by +1 with onClick event.</p>
      <ul>
        {temperatures.map(t => (
          <TViewByValue key={t.id} temperature={t} />
        ))}
      </ul>
    </>
  );
});

// Display temperature value from array
const TViewByValue = observer(({ temperature }) => {
  // increment value
  const handleIncrement = () => {
    temperature.increment();
  };

  return <li onClick={handleIncrement}>{temperature.temperature}</li>;
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
