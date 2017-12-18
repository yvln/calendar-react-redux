import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ManageMemo.css';

import WithMemoForm from '../containers/WithMemoForm';
import AllMemos from './AllMemos';

class ManageMemo extends Component {

  render() {
    const { memos, day, deleteItem } = this.props;
    return (
      <div className='manageMemos'>
        {day &&
          <div className="memoOfTheDay">

            <div className="dayClicked">{day}</div>

            {day !== 'All Memos' &&
              <WithMemoForm />
            }
            {day === 'All Memos' &&
              <div>Click on a day to add a memo!</div>
            }

            {memos.length === 0 && day !== 'All Memos' &&
              <div className="memoListEmpty">Nothing is planned for this day!</div>
            }

            {memos.length !== 0 &&
              <div className="memoListOfTheDay">
                <AllMemos
                  memos={memos}
                  day={day}
                  deleteItem={deleteItem}
                  />
              </div>
            }

          </div>
        }
      </div>
    )
  }

}

ManageMemo.propTypes = {
  day: PropTypes.string,
  memos: PropTypes.array,
  deleteItem: PropTypes.func,
};

export default ManageMemo;
