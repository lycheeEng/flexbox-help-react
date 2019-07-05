import React, { Component } from 'react';

import SelectItem from './SelectItem';

import './Select.scss';

const selectItemsData = [
  {
    title: 'flex-direction',
    description: '',
    value: ['row', 'row-reverse', 'column', 'column-reverse'],
    default: 'row'
  },
  {
    title: 'flex-wrap',
    description: `whether items wrap to the next row (only applies if combined width of items is greater than container's)`,
    value: ['nowrap', 'wrap', 'wrap-reverse'],
    default: 'nowrap'
  },
  {
    'title': 'justify-content',
    description: `alignment along the x axis`,
    value: ['flex-start', 'flex-end', 'center', 'space-around', 'space-between'],
    default: 'flex-start'
  },
  {
    title: 'align-items',
    description: `alignment along the y axis`,
    value: ['stretch', 'baseline', 'center', 'flex-start', 'flex-end'],
    default: 'stretch'
  },
  {
    title: 'align-content',
    description: `only applies if there is more than one row of items`,
    value: ['stretch', 'center', 'flex-start', 'flex-end', 'space-around', 'space-between'],
    default: 'stretch'
  }
];

class Select extends Component {
  render() {
    return (
      <div className='select'>
        {
          selectItemsData.map(data => {
            const { title, description, value: group, default: defaultVal } = data;
            return <SelectItem key={title} title={title} description={description} group={group} defaultVal={defaultVal} />
          })
        }
      </div>
    );
  }
}

export default Select;