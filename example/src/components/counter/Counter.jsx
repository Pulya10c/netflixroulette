import React from 'react';
import './counter.css';

export default class Counter extends React.Component {
  state = { value: 0 };

  changeValue = (count) => () => {
    this.setState({ value: count });
  };

  render() {
    const { value } = this.state;

    return (
      <div className="counter">
        <div className="counter-value">{value.toString()}</div>
        <div className="button-block">
          <button
            className="btn-increment"
            onClick={this.changeValue(value + 1)}
          >
            +
          </button>

          <button
            className="btn-decrement"
            onClick={this.changeValue(value - 1)}
          >
            -
          </button>
        </div>
      </div>
    );
  }
}
