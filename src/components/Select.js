import React, { Component } from 'react';

import SelectItem from './SelectItem';

import './Select.scss';

const selectItemsData = [
  {
    title: 'flexDirection',
    description: '',
    value: ['row', 'row-reverse', 'column', 'column-reverse'],
    default: 'row'
  },
  {
    title: 'flexWrap',
    description: `whether items wrap to the next row (only applies if combined width of items is greater than container's)`,
    value: ['nowrap', 'wrap', 'wrap-reverse'],
    default: 'nowrap'
  },
  {
    'title': 'justifyContent',
    description: `alignment along the x axis`,
    value: ['flex-start', 'flex-end', 'center', 'space-around', 'space-between'],
    default: 'flex-start'
  },
  {
    title: 'alignItems',
    description: `alignment along the y axis`,
    value: ['stretch', 'baseline', 'center', 'flex-start', 'flex-end'],
    default: 'stretch'
  },
  {
    title: 'alignContent',
    description: `only applies if there is more than one row of items`,
    value: ['stretch', 'center', 'flex-start', 'flex-end', 'space-around', 'space-between'],
    default: 'stretch'
  }
];

class Select extends Component {

  onRadioChange = (e) => {
    // this.setState({ styles });
    console.log(e.target.name)
  }

  render() {
    return (
      <div className='select'>
        {
          selectItemsData.map(data => {
            const { title, description, value: group, default: defaultVal } = data;
            return <SelectItem
              key={title}
              title={title}
              description={description}
              group={group}
              defaultVal={defaultVal}
              onRadioChange={this.onRadioChange} />
          })
        }
      </div>
    );
  }
}

export default Select;