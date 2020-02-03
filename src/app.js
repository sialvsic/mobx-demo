import React from "react";
import InnerObservable from "./components/InnerObservable";
import OuterObservable from "./components/OuterObservable";
import ComputedValue from "./components/ComputedValue";
import Action from "./components/Action";
import ObservableArray from "./components/ObservableArray";
import Asynchronous from "./components/Asynchronous";
import Reactions from "./components/Reactions";

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
      <p>Action</p>
      <Action />
      <p>observable Array</p>
      <ObservableArray />
      <p>Asynchronous</p>
      <Asynchronous />
      <p>Reactions</p>
      <Reactions />
    </div>
  );
}
