import { connect } from 'react-redux';
import ManageMemo from '../components/ManageMemo';
import * as actions from '../actions';

const getFilteredMemos = (day, memos) => {
  let memosFilter;
  if (day === 'All Memos') {
    memosFilter = [...memos];
  } else {
    if (memos) {
      memosFilter = memos.filter(e => {return e.date === day});
    } else {
      memosFilter = []
    }
  }
  return memosFilter;
}

const mapStateToProps = (state) => {
  return {
    memos: getFilteredMemos(state.displaymonth.day, state.memos),
     day: state.displaymonth.day,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteItem: (index) => {
      dispatch(actions.deleteAMemo(index))
    }
  };
};

const WithManageMemo = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ManageMemo);

export default WithManageMemo;
