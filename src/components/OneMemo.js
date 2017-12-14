import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './OneMemo.css';

class OneMemo extends Component {

  onClickItem = (event) => {
    event.target.classList.toggle('done');
  }

  render() {
    const { day, date, dataid, text, deleteItem } = this.props;

    return (
      <span className='itemMemoContainer'
        data-id={dataid}
        onClick={this.onClickItem}
        ref={element => this.element = element}>

          <span className='item-memo-textcontent'>

            {day === 'All Memos' &&
              <span className='dateMemoText'>{date}</span>
            }

            {text}

            {true &&
              <span className='delete-button' onClick={() => {deleteItem(dataid)}}>
                Delete
              </span>
            }

          </span>

      </span>
    )
  }
}

OneMemo.propTypes = {
  day: PropTypes.any,
  date: PropTypes.any,
  dataid: PropTypes.any,
  text: PropTypes.any,
  deleteItem: PropTypes.func,
};

export default OneMemo;
