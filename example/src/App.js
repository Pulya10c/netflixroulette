import './App.css';
import React from 'react';
import { SearchBlock } from './components/search-block/SearchBlock';
import Counter from './components/counter/Counter';
import PureCounter from './components/pureComponent/PureCounter';

export default class App extends React.Component {
  state = { initialValue: 10 };
  changeValue = (value) => () => {
    this.setState(({ initialValue }) => {
      return {
        initialValue: initialValue + value,
      };
    });
  };
  render() {
    const { initialValue } = this.state;
    return (
      <>
        <SearchBlock></SearchBlock>
        <Counter />
        <PureCounter
          changeValue={this.changeValue}
          initialValue={initialValue}
        />
      </>
    );
  }
}
