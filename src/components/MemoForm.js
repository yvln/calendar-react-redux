import React, { Component } from "react";
import PropTypes from "prop-types";
import "./MemoForm.css";

class MemoForm extends Component {
  input = null;

  onInputChange = event => {
    this.input = event.target.value;
  };

  render() {
    const { onSubmitMemo, day, memos } = this.props;

    return (
      <div className="formContainer">
        <form
          onSubmit={event => {
            event.preventDefault();
            event.target.reset();
            {
              onSubmitMemo(this.input, day, memos);
            }
          }}
        >
          <input
            autoComplete="off"
            name="newMemo"
            type="textarea"
            onChange={this.onInputChange}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

MemoForm.propTypes = {
  onSubmitMemo: PropTypes.func,
  day: PropTypes.string,
  memos: PropTypes.array
};

export default MemoForm;
