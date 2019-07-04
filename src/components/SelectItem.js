import React from 'react';

import SingleItem from './SingleItem';

import './SingleItem.scss';

import './SelectItem.scss';

function SelectItem(props) {
  return (
    <div className='select-item'>
      <div className="select-info">
        <h4 className='select-item--title'>{props.title}</h4>
        <span className='select-item--description'></span>
      </div>
      <div className="select-group">
        <SingleItem group='flex-direction' properties='row' isDefault='true' />
        <SingleItem group='flex-direction' properties='row-reverse' />
        <SingleItem group='flex-direction' properties='column' />
      </div>
    </div>
  );
}

export default SelectItem;