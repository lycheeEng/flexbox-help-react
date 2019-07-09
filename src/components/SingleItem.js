import React from 'react';

function SingleItem(props) {
  const { title, property, defaultVal, onRadioChange } = props;
  return (
    <div className='single-item'>
      {/* todos: ref */}
      <input
        type='radio'
        name={title}
        id={`${title}_${property}`}
        value={property}
        onChange={onRadioChange}
      // checked={this.state.property === defaultVal}
      />
      <label
        htmlFor={`${title}_${property}`}>
        {defaultVal === property ? `${property} (default)` : property}
      </label>
    </div>
  );
}

export default SingleItem;