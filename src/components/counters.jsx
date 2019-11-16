import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    return (
      <div>
        <button
          onClick={this.props.onReset}
          className="btn btn-primary btn-sm m-2"
          type="button"
        >
          RESET
        </button>
        {this.props.counters.map(counters => (
          <Counter
            key={counters.id}
            counters={counters}
            onDelete={this.props.onDelete}
            handleIncrement={this.props.onIncrement}
          ></Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
