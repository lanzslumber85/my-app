import React from "react";

class Counter extends React.Component {
  formatCount = () => {
    const { value } = this.props.currentVal;
    if (value === 0) {
      return "Zero";
    } else {
      return value;
    }
  };

  getClassBadge = () => {
    let classes = "badge m-2 badge-";
    classes += this.props.currentVal.value === 0 ? "warning" : "primary";
    return classes;
  };

  render() {
    return (
      <div className="row">
        <div className="col-1">
          {/* DISPLAY VALUE */}
          <span className={this.getClassBadge()}>{this.formatCount()}</span>
        </div>

        <div className="col">
          {/* BUTTON ADD */}
          <button
            className="btn btn-secondary btn-sm"
            onClick={() => this.props.onIncrement(this.props.currentVal)}
          >
            +
          </button>

          {/* BUTTON MINUS */}
          <button
            className="btn btn-secondary btn-sm m-2"
            disabled={!this.props.currentVal.value}
            onClick={() => this.props.onDecrement(this.props.currentVal)}
          >
            -
          </button>

          {/* BUTTON DELETE */}
          <button
            className="btn btn-danger btn-sm"
            onClick={() => this.props.onDelete(this.props.currentVal.id)}
          >
            Delete
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;
