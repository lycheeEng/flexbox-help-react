import React from 'react';

import SingleItem from './SingleItem';

import './SingleItem.scss';

import './SelectItem.scss';

function SelectItem(props) {
  console.log(props);
  const { title, description, group, defaultVal } = props;
  return (
    <div className='select-item'>
      <div className="select-info">
        <h4 className='select-item--title'>{title}</h4>
        <span className='select-item--description'>{description}</span>
      </div>
      <div className="select-group">
        {
          group.map(property => {
            return (
              <SingleItem
                key={property}
                group={title}
                property={property}
                defaultVal={defaultVal}
              />);
          })
        }
      </div>
    </div>
  );
}

export default SelectItem;