import React from 'react';

import './Result.scss';

const defaultResult = [
  ['flex-direction', 'row'],
  ['flex-wrap', 'nowrap'],
  ['justify-content', 'flex-end'],
  ['align-items', 'stretch'],
  ['align-content', 'stretch']
]

function Result(props) {
  const { name, value } = props.change;
  defaultResult.forEach(res => res[0] === name ? res[1] = value : '');

  return (
    <div className='result'>
      <pre>
        {'{\n'}
        {
          defaultResult.map(res => {
            return `  ${res[0]}: ${res[1]};\n`;
          })
        }
        {'}'}
      </pre>
    </div>
  );
}

export default Result;