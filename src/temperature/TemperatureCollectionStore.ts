import { observable } from 'mobx';
import TemperatureStore from './TemperatureStore';
import { TemperatureTypes } from './TemperatureTypes';

const temperatureByCity = observable(
  new Map([
    ['Amsterdam', new TemperatureStore(25, TemperatureTypes.Celsius)],
    ['Rome', new TemperatureStore(55, TemperatureTypes.Fahrenheit)]
  ])
);

const temperatureArray = observable(
  new Array(
    new TemperatureStore(25, TemperatureTypes.Celsius),
    new TemperatureStore(25, TemperatureTypes.Fahrenheit),
    new TemperatureStore(25, TemperatureTypes.Kelvin)
  )
);

const temperaturesContainer = observable(new Array());

export { temperaturesContainer, temperatureByCity, temperatureArray };

/*
return new Map([
      ["City1", new TemperatureStore(25, TemperatureTypes.Celsius)],
      ["City2", new TemperatureStore(55, TemperatureTypes.Fahrenheit)]
    ]);


// For array 

const temps = oberser
*/
