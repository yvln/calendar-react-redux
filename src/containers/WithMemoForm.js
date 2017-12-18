import { connect } from "react-redux";
import MemoForm from "../components/MemoForm";
import * as actions from "../actions";

const mapStateToProps = state => {
  return {
    day: state.currentday,
    memos: state.memos
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onSubmitMemo: (input, day, memos) => {
      dispatch(actions.addAMemo(input, day));
    }
  };
};

const WithMemoForm = connect(mapStateToProps, mapDispatchToProps)(MemoForm);

export default WithMemoForm;
