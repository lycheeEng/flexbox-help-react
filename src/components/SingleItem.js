import React from 'react';

function SingleItem(props) {
  const { group, property, defaultVal } = props;

  return (
    <div className='single-item'>
      <input
        type='radio'
        name={group}
        id={`${group}_${property}`}
        value={property}
        onChange={props.onRadioChange}
      // checked={defaultVal === property}
      />
      <label
        htmlFor={`${group}_${property}`}>
        {defaultVal === property ? `${property} (default)` : property}
      </label>
    </div>
  );
}

export default SingleItem;