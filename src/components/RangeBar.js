import React from 'react';

import './RangeBar.scss';

function RangeBar() {
  return (
    <div className='range-bar'>
      <input type='range' id='flexCount' name='flexCount' min='1' max='8' />
      <label htmlFor="flexCount"></label>
    </div>
  );
}

export default RangeBar;