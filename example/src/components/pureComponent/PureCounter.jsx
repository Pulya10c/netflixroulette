import React from 'react';
import './counter.css';

export default class PureCounter extends React.PureComponent {
  render() {
    const { initialValue, changeValue } = this.props;

    return (
      <div className="counter">
        <div className="counter-value">{initialValue.toString()}</div>
        <div className="button-block">
          <button
            className="btn-increment"
            onClick={changeValue(1)}
          >
            +
          </button>

          <button
            className="btn-decrement"
            onClick={changeValue(- 1)}
          >
            -
          </button>
        </div>
      </div>
    );
  }
}
