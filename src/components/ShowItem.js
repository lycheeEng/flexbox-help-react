import React from 'react';

import './ShowItem.scss';

function ShowItem(props) {
  return (
    <div className='show-item'>
      <span className='show-item__item'>{props.text}</span>
    </div>
  );
}

export default ShowItem;