import React, { Component } from 'react';

import SelectItem from './SelectItem';

import './Select.scss';

class Select extends Component {
  render() {
    return (
      <div className='select'>
        <SelectItem />
      </div>
    );
  }
}

export default Select;