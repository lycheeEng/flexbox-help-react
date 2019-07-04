import React, { Component } from 'react';

import NavBar from './components/NavBar';
import Show from './components/Show';
import Select from './components/Select';
import Result from './components/Result';

import './App.scss';

class App extends Component {
  render() {
    return (
      <div className='app'>
        <NavBar />
        <section>
          <Show />
          <Select />
        </section>
        <Result />
      </div>
    );
  }
}

export default App;