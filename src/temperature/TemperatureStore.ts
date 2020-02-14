import { observable, computed, action } from 'mobx';
import { TemperatureTypes } from './TemperatureTypes';

class TemperatureStore {
  id = Math.random();
  @observable unit = TemperatureTypes.Celsius;
  @observable temperatureCelsius: number = 0;
  @observable location: string = '';
  @observable loading = true;

  constructor(degrees: number, unit: TemperatureTypes, location?: string) {
    this.unit = unit;
    this.temperatureCelsius = degrees;

    if (typeof location !== 'undefined') {
      this.setLocation(location);
    } else {
      this.loading = false;
    }
  }

  @computed get temperatureKelvin(): number {
    console.log('calculating Kelvin');
    return this.temperatureCelsius * (9 / 5) + 32;
  }

  @computed get temperatureFahrenheit(): number {
    console.log('calculating Kelvin');
    return this.temperatureCelsius + 273.15;
  }

  @computed get temperature(): string {
    console.log('calculating temperature');

    if (this.unit === TemperatureTypes.Kelvin) {
      return this.temperatureKelvin.toString() + '°K';
    } else if (this.unit === TemperatureTypes.Fahrenheit) {
      return this.temperatureFahrenheit.toString() + '°F';
    } else {
      return this.temperatureCelsius.toString() + '°C';
    }
  }

  @action setUnit(newUnit: TemperatureTypes) {
    this.unit = newUnit;
  }

  @action setCelsius(degrees: number) {
    this.temperatureCelsius = degrees;
  }

  @action setLocation(location: string) {
    this.location = location;
    this.fetch();
  }

  @action increment() {
    this.setCelsius(this.temperatureCelsius + 1);
    console.log(this.temperatureCelsius);
  }

  @action fetch() {
    // https://openweathermap.org/data/2.5/weather/?appid=b6907d289e10d714a6e88b30761fae22&lat=9.8622306&lon=-83.9231756&units=metric
    window
      .fetch(
        `https://openweathermap.org/data/2.5/weather/?appid=b6907d289e10d714a6e88b30761fae22&q=${
          this.location
        }&units=metric`
      )
      .then(res => res.json())
      .then(
        action(json => {
          this.temperatureCelsius = json.main.temp;
          this.loading = false;
        })
      );
  }

  @action('Update temperature and unit')
  setTemperatureAndUnit(degrees: number, unit: TemperatureTypes) {
    this.setUnit(unit);
    this.setCelsius(degrees);
  }
}

export default TemperatureStore;

// const temperatureStore = new TemperatureStore();
// export default temperatureStore;
