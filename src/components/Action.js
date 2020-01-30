import React from "react";
import { observable, computed, action } from "mobx";
import { observer } from "mobx-react";

class Temperature {
  @observable unit = "C";
  @observable temperatureCelsius = 25;

  @computed get temperatureKelvin() {
    console.log("calculating Kelvin");
    return this.temperatureCelsius * (9 / 5) + 32;
  }

  @computed get temperatureFahrenheit() {
    console.log("calculating Fahrenheit");
    return this.temperatureCelsius + 273.15;
  }

  @computed get temperature() {
    console.log("calculating temperature");
    switch (this.unit) {
      case "K":
        return this.temperatureKelvin + "°K";
      case "F":
        return this.temperatureFahrenheit + "°F";
      case "C":
        return this.temperatureCelsius + "°C";
    }
  }

  //可以设置action的名字
  @action("update unit")
  setUnit(newUnit) {
    console.log("setUnit");
    this.unit = newUnit;
  }

  @action setCelsius(degrees) {
    this.temperatureCelsius = degrees;
  }

  @action setTemperatureAndUnit(degrees, unit) {
    this.setCelsius(degrees);
    this.setUnit(unit);
  }
}

const t = new Temperature();

const App = observer(({ temperature }) => {
  return (
    <div>
      {temperature.temperature}
      <div>
        <button onClick={() => temperature.setUnit("C")}>
          更改单位: 摄氏单位
        </button>
        <button onClick={() => temperature.setUnit("F")}>
          更改单位: 华氏单位
        </button>
        <button onClick={() => temperature.setUnit("K")}>
          更改单位: 开氏单位
        </button>
      </div>
    </div>
  );
});

function Action() {
  return (
    <div>
      <App temperature={t} />
    </div>
  );
}

export default Action;
