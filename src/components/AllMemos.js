import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './AllMemos.css';

import OneMemo from './OneMemo';

class AllMemos extends Component {

  state = {
    hovered: 0
  }

  componentDidUpdate(nextProps) {
    if (this.props.memos.length !== nextProps.memos.length) {
      this.onHover();
    }
  }

  onHover = () => {
    const itemMemo = [...document.querySelectorAll('.item-memo')];
    itemMemo.forEach( element => {
      let id = element.getAttribute('data-id');
      element.addEventListener('mouseout', e => {this.onMouseOut(e)});
      element.addEventListener('mouseover', e => {this.onMouseOver(e, id)});
    })
  }

  onMouseOver = (event, index) => {
    event.target.classList.add('hovered');
    this.setState({
      hovered: parseInt(index)
    })
  }

  onMouseOut = (event) => {
    event.target.classList.remove('hovered');
    this.setState({
      hovered: 0
    })
  }

  allMemos = (memos, day) => {
      return memos.map(memo => {
        return (
          <li className='item-memo'
            key={memo.index}
            data-id={memo.index}>
            <OneMemo
              day={day}
              date={memo.date}
              dataid={memo.index}
              text={memo.text.content}
              deleteItem={this.props.deleteItem}
              hovered={this.state.hovered}
              onHover={this.onHover}
            />
          </li>
        )
      })
  }

  render() {
    const { memos, day } = this.props;

    return (
      <ul className='allMemosList'>
        {this.allMemos(memos, day)}
      </ul>
    )
  }
}

AllMemos.propTypes = {
  memos: PropTypes.any,
  day: PropTypes.any,
  deleteItem: PropTypes.func,
};

export default AllMemos;
