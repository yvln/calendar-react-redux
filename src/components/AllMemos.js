import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './AllMemos.css';

import OneMemo from './OneMemo';

class AllMemos extends Component {

  allMemos = () => {
    const {memos, day} = this.props
    return memos.map(memo => {
      return (
        <li className='item-memo'
          key={memo.id}>
          <OneMemo
            day={day}
            date={memo.date}
            dataid={memo.id}
            text={memo.text.content}
            deleteItem={this.props.deleteItem}
          />
        </li>
      )
    })
  }

  render() {
    return (
      <ul className='allMemosList'>
        {this.allMemos()}
      </ul>
    )
  }
}

AllMemos.propTypes = {
  memos: PropTypes.array,
  day: PropTypes.string,
  deleteItem: PropTypes.func,
};

export default AllMemos;
