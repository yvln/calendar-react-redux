import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './OneMemo.css';

class OneMemo extends Component {

  state = {
    done: false
  }

  onClickItem = () => {
    this.setState((currentState) => ({
      done: !currentState.done
    }))
  }

  render() {
    const { day, date, dataid, text, deleteItem } = this.props;

    return (
      <span className='itemMemoContainer'
        onClick={this.onClickItem}
        ref={element => this.element = element}>

          <span className={`item-memo-textcontent ${this.state.done ? 'done' : ''}`}>

            {day === 'All Memos' &&
              <span className='dateMemoText'>{date}</span>
            }

            {text}

            <span className='delete-button' onClick={() => {deleteItem(dataid)}}>
              Delete
            </span>

          </span>

      </span>
    )
  }
}

OneMemo.propTypes = {
  day: PropTypes.string,
  date: PropTypes.string,
  dataid: PropTypes.number,
  text: PropTypes.string,
  deleteItem: PropTypes.func,
};

export default OneMemo;
