import React from 'react';

function SingleItem(props) {
  return (
    <div className='single-item'>
      <input type='radio' name={props.group} id={`${props.group}_${props.property}`} value={props.property} />
      <label htmlFor={`${props.group}_${props.property}`}>{props.isDefault ? `${props.property} (default)` : props.property}</label>
    </div>
  );
}

export default SingleItem;