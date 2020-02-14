import { observer, inject } from 'mobx-react';
import * as React from 'react';

import InputStore from './InputStore';
import TemperatureStore from './TemperatureStore';
import { TemperatureTypes } from './TemperatureTypes';

const Temperature = observer(({ temperaturesMap, temperaturesArray }) => {
  // render
  return (
    <div>
      <h2>Temperature</h2>
      <TViewByMap temperatures={temperaturesMap} />
      <TViewByArray temperatures={temperaturesArray} />
      <TViewInput />
    </div>
  );
});

const inputX = new InputStore();

const TViewInput = inject('temperatures')(
  observer(({ temperatures }) => {
    return (
      <>
        <h3>By Input</h3>
        <TemperatureInput temperatures={temperatures} store={inputX} />
        <p> Cities ​​temperature list from openweathermap.org</p>
        <ul>
          {temperatures.map(temperature => (
            <TViewByLocation key={temperature.id} temperature={temperature} />
          ))}
        </ul>
      </>
    );
  })
);

// Display temperature value from array
const TViewByLocation = observer(({ temperature }) => {
  return (
    <>
      <li>
        {temperature.location}:{' '}
        {temperature.loading ? 'loading...' : temperature.temperature}
      </li>
    </>
  );
});

const TemperatureInput = observer(({ temperatures, store }) => {
  const handleOnChange = e => {
    store.onChange(e.target.value);
  };

  const handleOnSubmit = () => {
    temperatures.push(
      new TemperatureStore(12, TemperatureTypes.Celsius, store.input)
    );
    store.onSubmit();
  };

  return (
    <>
      <li>
        Destination:
        <input onChange={handleOnChange} value={store.input} />
        <button onClick={handleOnSubmit}> Add </button>
      </li>
    </>
  );
});

// Display mapper temperatures
const TViewByMap = observer(({ temperatures }) => {
  return (
    <>
      <h3>Mapper</h3>
      <ul>
        {[...temperatures.entries()].map(([city, temperature]) => (
          <TViewByKeyValue
            key={temperature.id}
            city={city}
            temperature={temperature}
          />
        ))}
      </ul>
    </>
  );
});

const TViewByKeyValue = observer(({ city, temperature }) => {
  return (
    <>
      <li>
        {city}: {temperature.temperature}
      </li>
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

import * as ReactDOM from 'react-dom';
import { observable } from 'mobx';
import { Component } from 'react';


  for (let [key, value] of temperatures.entries()) {
    console.log(key + " = " + value.temperature);
  }
  [...temperatures.entries()].map(([key, value]: [string, any]) =>
    console.log(key, value)
  );

  {[...temperatures.entries()].map(([city, temperature]) => {
          return (
            <li key={city + temperature}>
              {city}: {temperature.temperature}
            </li>
          );
        })}


        <TViewByKeyValue
            key={temperature.id}
            city={city}
            temperature={temperature}
          />
*/
