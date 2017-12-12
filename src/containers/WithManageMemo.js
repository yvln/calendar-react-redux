import { connect } from 'react-redux';
import ManageMemo from '../components/ManageMemo';
import * as actions from '../actions';

const mapStateToProps = (state) => {
    return {
      memos: state.displaymonth.memos,
       day: state.displaymonth.day,
    };
};

let index = 0;
let text = '';

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
