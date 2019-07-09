import React from 'react';

import ShowItem from './ShowItem';

import './Show.scss';

function Show(props) {
  function generateShowItem() {
    let items = [];
    for (let i = 1; i <= props.range; i++) {
      const item = <ShowItem text={i} key={i} />;
      items.push(item);
    };
    return items;
  }

  return (
    <div className='show' style={props.styles}>
      {generateShowItem()}
    </div>
  );
}

export default Show;