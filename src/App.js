import React, { Component } from 'react';

import NavBar from './components/NavBar';
import RangeBar from './components/RangeBar';
import Show from './components/Show';
import Select from './components/Select';
import Result from './components/Result';

import './App.scss';

class App extends Component {
  state = {
    range: 4,
    styles: {
      'flexDirection': 'row',
      'flexWrap': 'nowrap',
      'justifyContent': 'flex-end',
      'alignItems': 'stretch',
      'alignContent': 'stretch'
    },
    change: {
      name: '',
      value: ''
    }
  }

  onRangeBarChange = range => { this.setState({ range }) }

  onRadioChange = event => {
    const prevStyles = { ...this.state.styles };

    const [_name0, _name1] = event.target.name.split('-');
    const name = `${_name0}${_name1.slice(0, 1).toUpperCase() + _name1.slice(1)}`;
    const value = event.target.value;
    // console.log(event.target.name.replace(/\W+(.)/g, function (match, chr) { return chr.toUpperCase() }))

    prevStyles[name] = value;

    this.setState({ styles: prevStyles });
    this.setState({
      change: {
        name: event.target.name,
        value
      }
    });
  }

  render() {
    return (
      <div className='app'>
        <NavBar />
        <RangeBar onRangeBarChange={this.onRangeBarChange} />
        <section>
          <Show range={this.state.range} styles={this.state.styles} />
          <Select onRadioChange={this.onRadioChange} />
        </section>
        <Result change={this.state.change} />
      </div>
    );
  }
}

export default App;