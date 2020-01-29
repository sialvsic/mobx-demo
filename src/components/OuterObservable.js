import React, { Component } from "react";
import { observable } from "mobx";
import { observer } from "mobx-react";

//关注点分离
const appState = observable({
  count: 0
});

appState.increment = function() {
  this.count++;
};

appState.decrement = function() {
  this.count--;
};

@observer
class Counter extends Component {
  handleInc = () => {
    this.props.store.increment();
  };

  handleDec = () => {
    this.props.store.decrement();
  };

  render() {
    const { count } = this.props.store;
    return (
      <div>
        Counter {count} <br />
        <button onClick={this.handleInc}> + </button>
        <button onClick={this.handleDec}> - </button>
      </div>
    );
  }
}

function OuterObservable() {
  return (
    <div>
      <Counter store={appState} />
    </div>
  );
}

export default OuterObservable;
