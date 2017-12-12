import { connect } from 'react-redux';
import MemoForm from '../components/MemoForm';
import * as actions from '../actions';

const mapStateToProps = (state) => {
    return {
      day: state.displaymonth.day,
      memos: state.memos
    };
};

let indexMemo = 0;

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onSubmitMemo: (input, day, memos) => {
      indexMemo++;
      dispatch(actions.addAMemo(input, day, indexMemo))
    },
    displayAllMemos: (day, memos) => {
      dispatch(actions.displayDetailsDays(day, memos))
    }
  };
};

const WithMemoForm = connect(
  mapStateToProps,
  mapDispatchToProps,
)(MemoForm);

export default WithMemoForm;
