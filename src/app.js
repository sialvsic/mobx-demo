import React from "react";
import InnerObservable from "./components/InnerObservable";
import OuterObservable from "./components/OuterObservable";
import ComputedValue from "./components/ComputedValue";

export default function app() {
  return (
    <div>
      <p>Mobx使用</p>
      <p>内部使用observable</p>
      <InnerObservable />
      <p>外部的observable</p>
      <OuterObservable />
      <p>计算属性</p>
      <ComputedValue />
    </div>
  );
}
