import React, { Component } from 'react';

import NavBar from './components/NavBar';
import RangeBar from './components/RangeBar';
import Show from './components/Show';
import Select from './components/Select';
import Result from './components/Result';

import './App.scss';

class App extends Component {
  state = {
    range: 4
  }

  handleRangeBarChange = range => {
    this.setState({ range });
  }

  render() {
    return (
      <div className='app'>
        <NavBar />
        <RangeBar onRangeBarChange={this.handleRangeBarChange} />
        <section>
          <Show range={this.state.range} />
          <Select />
        </section>
        <Result />
      </div>
    );
  }
}

export default App;