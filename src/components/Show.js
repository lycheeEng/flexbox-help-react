import React, { Component } from 'react';

import ShowItem from './ShowItem';

import './Show.scss';

class Show extends Component {
  // todos: changes for flex will be here
  constructor(props) {
    super(props);
    this.state = {
      styles: {
        'flexDirection': 'row',
        'flexWrap': 'nowrap',
        'justifyContent': 'flex-end',
        'alignItems': 'stretch',
        'alignContent': 'stretch'
      }
    }
  }

  generateShowItem = () => {
    let items = [];
    for (let i = 1; i <= this.props.range; i++) {
      const item = <ShowItem text={i} key={i} />;
      items.push(item);
    };
    return items;
  }

  render() {
    return (
      <div className='show' style={this.state.styles}>
        {
          this.generateShowItem()
        }
      </div>
    );
  }
}

export default Show;