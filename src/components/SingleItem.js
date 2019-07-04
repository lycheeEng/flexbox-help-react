import React from 'react';

function SingleItem(props) {
  return (
    <div className='single-item'>
      <input type='radio' name={props.group} id={props.group} value={props.properties} />
      <label for={props.group}>{props.isDefault ? `${props.properties} (default)` : props.properties}</label>
    </div>
  );
}

export default SingleItem;