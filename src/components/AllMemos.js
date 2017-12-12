import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './AllMemos.css';

class AllMemos extends Component {
  constructor(props) {
    super(props);
  }

  allMemos = (memos) => {
    return memos.map( memo => {
      console.log(memo);
      console.log(memo.text.date);
      return <li className='allMemosItem'>
          <span className='dateMemoText'>{memo.date}</span>
          <span className='listMemoText'> {memo.text.content}</span>
        </li>
    })
  }

  render() {
    const { memos } = this.props;

    return (
      <ul className='allMemosList'>
        {this.allMemos(memos)}
      </ul>
    )
  }
}

AllMemos.propTypes = {
  memos: PropTypes.any,
};

export default AllMemos;
