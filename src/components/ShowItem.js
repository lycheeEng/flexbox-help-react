import React from 'react';

import './ShowItem.scss';

function ShowItem(props) {
  return (
    <div className='show-item' style={{ backgroundColor: `rgba(144, 238, 144, 0.${10 - props.text})` }}>
      <span className='show-item__item'>{props.text}</span>
    </div>
  );
}

export default ShowItem;