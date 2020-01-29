import React from "react";
import { observable, computed } from "mobx";
import { observer } from "mobx-react";

//更好的数据和UI分离
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

  updateUnit(unit) {
    this.unit = unit;
  }

  @computed get temperature() {
    console.log("calculating temperature");

    switch (this.unit) {
      case "K":
        return this.temperatureKelvin + "ºK";
      case "F":
        return this.temperatureFahrenheit + "ºF";
      case "C":
        return this.temperatureCelsius + "ºC";
    }
  }
}

const t = new Temperature();

const App = observer(({ temperature }) => {
  return (
    <div>
      {temperature.temperature}
      <div>
        <button onClick={() => temperature.updateUnit("C")}>
          更改单位: 摄氏单位
        </button>
        <button onClick={() => temperature.updateUnit("F")}>
          更改单位: 华氏单位
        </button>
        <button onClick={() => temperature.updateUnit("K")}>
          更改单位: 开氏单位
        </button>
      </div>
    </div>
  );
});

export default function ComputedValue() {
  return (
    <div>
      <App temperature={t} />
    </div>
  );
}
