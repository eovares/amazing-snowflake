import { observable, computed, action } from "mobx";
import { TemperatureTypes } from "./TemperatureTypes";

class TemperatureStore {
  @observable unit = TemperatureTypes.Celsius;
  @observable temperatureCelsius: number;

  constructor(degrees: number, unit: TemperatureTypes) {
    this.unit = unit;
    this.temperatureCelsius = degrees;
  }

  @computed get temperatureKelvin(): number {
    console.log("calculating Kelvin");
    return this.temperatureCelsius * (9 / 5) + 32;
  }

  @computed get temperatureFahrenheit(): number {
    console.log("calculating Kelvin");
    return this.temperatureCelsius + 273.15;
  }

  @computed get temperature(): string {
    console.log("calculating temperature");

    if (this.unit === TemperatureTypes.Kelvin) {
      return this.temperatureKelvin.toString() + "°K";
    } else if (this.unit === TemperatureTypes.Fahrenheit) {
      return this.temperatureFahrenheit.toString() + "°F";
    } else {
      return this.temperatureCelsius.toString() + "°C";
    }
  }

  @action setUnit(newUnit: TemperatureTypes) {
    this.unit = newUnit;
  }

  @action setCelsius(degrees: number) {
    this.temperatureCelsius = degrees;
  }

  @action("Update temperature and unit")
  setTemperatureAndUnit(degrees: number, unit: TemperatureTypes) {
    this.setUnit(unit);
    this.setCelsius(degrees);
  }
}

export default TemperatureStore;

// const temperatureStore = new TemperatureStore();
// export default temperatureStore;
