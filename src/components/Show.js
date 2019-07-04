import React, { Component } from 'react';

import ShowItem from './ShowItem';

import './Show.scss';

class Show extends Component {
  // todos: changes for flex will be here
  state = {
    styles: {
      flexWrap: 'wrap'
    }
  }

  render() {
    return (
      <div className='show' style={this.state.styles}>
        <ShowItem text='1' />
        <ShowItem text='2' />
        <ShowItem text='3' />
        <ShowItem text='4' />
        <ShowItem text='5' />
        <ShowItem text='6' />
        <ShowItem text='7' />
        {/* render specific number components */}
      </div>
    );
  }
}

export default Show;