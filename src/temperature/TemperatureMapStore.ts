import { observable } from "mobx";
import TemperatureStore from "./TemperatureStore";
import { TemperatureTypes } from "./TemperatureTypes";

const temperatureByCity = observable(
  new Map([
    ["Amsterdam", new TemperatureStore(25, TemperatureTypes.Celsius)],
    ["Rome", new TemperatureStore(55, TemperatureTypes.Fahrenheit)]
  ])
);

export default temperatureByCity;

/*
return new Map([
      ["City1", new TemperatureStore(25, TemperatureTypes.Celsius)],
      ["City2", new TemperatureStore(55, TemperatureTypes.Fahrenheit)]
    ]);
*/
