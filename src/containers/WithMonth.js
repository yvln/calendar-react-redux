import { connect } from 'react-redux';
import Month from '../components/Month';
import * as actions from '../actions';

const mapStateToProps = (state) => {
  return {
    day: state.displaymonth.day,
    memos: state.memos,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onClickDay: (dateObj, memos) => {

      let day = dateObj.getDate();
      if (day < 10) {
        day = '0'+day
      }
      const month = dateObj.getMonth()+1;
      const year = dateObj.getFullYear();
      const fullDate = `${day}/${month}/${year}`;

      dispatch(actions.displayDetailsDays(fullDate));
    },
    onClickSeeAll: (memos) => {
      dispatch(actions.displayDetailsDays('All Memos'));
    }
  };
};

const WithMonth = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Month);

export default WithMonth;
