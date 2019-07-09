import React from 'react';

import './RangeBar.scss';

function RangeBar(props) {


  return (
    <div className='range-bar'>
      <input type='range' id='flexCount' name='flexCount' min='1' max='8' onChange={props.onRangeBarChange} />
      <label htmlFor="flexCount"></label>
    </div>
  );
}

export default RangeBar;