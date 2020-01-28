import React, { Component } from "react";
import { observable } from "mobx";
import { observer } from "mobx-react";

//关注点未分离
@observer
class CounterWithInnerOB extends Component {
  @observable count = 0;

  handleInc = () => {
    this.count++;
    console.log("+1");
  };

  handleDec = () => {
    this.count--;
    console.log("-1");
  };

  render() {
    return (
      <div>
        Counter {this.count} <br />
        <button onClick={this.handleInc}> + </button>
        <button onClick={this.handleDec}> - </button>
      </div>
    );
  }
}

export default CounterWithInnerOB;
