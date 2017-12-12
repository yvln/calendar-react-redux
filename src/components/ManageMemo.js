import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ManageMemo.css';

import WithMemoForm from '../containers/WithMemoForm';

class ManageMemo extends Component {

  constructor(props) {
    super(props);
  }

  state = {
    hovered: 0
  }

  componentDidUpdate(nextProps) {
    if (this.props.memos.length !== nextProps.memos.length) {
      this.onHover();
    }
  }

  onClickItem = (event) => {
    event.target.classList.toggle('done');
  }

  onMouseOver = (event, index) => {
    event.target.classList.add('hovered');
    this.setState({
      hovered: index
    })
  }
  onMouseLeave = (event) => {
    event.target.classList.remove('hovered');
    this.setState({
      hovered: 0
    })
  }

  onHover = () => {
    const itemMemo = [...document.querySelectorAll('.item-memo')];
    itemMemo.forEach( element => {
      let id = element.getAttribute('data-id');
      element.addEventListener('mouseover', e => {this.onMouseOver(e, id)});
      element.addEventListener('mouseleave', this.onMouseLeave);
    })
  }

  getAllMemos = (memos, day, deleteItem) => {
    return memos.map(memo => {
      if (memo.date === day) {
        return <div  className='itemMemoContainer'>

                  <div className='item-memo'
                    data-id={memo.index}
                    onClick={this.onClickItem}
                    key={Math.random()} >
                    <div className='item-memo-textcontent'>{memo.text.content}</div>
                  </div>

                  {this.state.hovered == memo.index &&
                    <div className='delete-button-container'>
                      <button className='delete-button' onClick={() => {this.props.deleteItem(memo.index)}}>Delete</button>
                    </div>
                  }

               </div>
      }
    })
  }

  render() {
    const { memos, day } = this.props;
    return (
      <div className='manageMemos'>
        {day &&
          <div className="memoOfTheDay">
            <div className="dayClicked">{day}</div>
            <WithMemoForm />
            {memos.length !== 0 &&
              <div className="memoListOfTheDay">{this.getAllMemos(memos, day)}</div>
            }
          </div>
        }
      </div>
    )
  }

}

ManageMemo.propTypes = {
  day: PropTypes.string,
  memos: PropTypes.any,
  deleteItem: PropTypes.func,
};

export default ManageMemo;
