import React from 'react';

import SingleItem from './SingleItem';

import './SingleItem.scss';

import './SelectItem.scss';

function SelectItem(props) {
  const { title, description, values, defaultVal, onRadioChange } = props;
  return (
    <div className='select-item'>
      <div className="select-info">
        <h4 className='select-item--title'>{title}</h4>
        <span className='select-item--description'>{description}</span>
      </div>
      <div className="select-group">
        {
          values.map(property => {
            return (
              <SingleItem
                key={property}
                title={title}
                property={property}
                defaultVal={defaultVal}
                onRadioChange={onRadioChange}
              />);
          })
        }
      </div>
    </div>
  );
}

export default SelectItem;