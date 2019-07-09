import React, { Component } from 'react';

import './RangeBar.scss';

class RangeBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 4
    };
  }

  handleRangeValueChange = async e => {
    await this.setState({ value: e.target.value });
    await this.props.onRangeBarChange(this.state.value);
  }

  render() {
    return (
      <div className='range-bar' >
        <input type='range' id='flexCount' name='flexCount' min='1' max='8' value={this.state.value} onChange={this.handleRangeValueChange} />
        <label htmlFor="flexCount"></label>
      </div>
    );
  }

}

export default RangeBar;