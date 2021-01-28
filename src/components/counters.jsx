import React, { Component } from "react";
import Counter from "./counter.jsx";

class Counters extends Component {
  render() {
    return (
      <div>
        {/* BUTTON RESET */}
        <button
          className="btn btn-primary btn-sm m-2"
          onClick={this.props.onReset}
        >
          Reset
        </button>

        {this.props.counters.map((currentVal) => (
          <Counter
            key={currentVal.id}
            currentVal={currentVal}
            onIncrement={this.props.onIncrement}
            onDecrement={this.props.onDecrement}
            onDelete={this.props.onDelete}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
