import React, { Component } from 'react';

import NavBar from './components/NavBar';
import Show from './components/Show';
import Select from './components/Select';
import Result from './components/Result';

class App extends Component {
  render () {
    return (
      <div>
        <NavBar />
        <Show />
        <Select />
        <Result />
      </div>
    );
  }
}

export default App;