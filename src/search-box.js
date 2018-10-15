import React, { Component } from "react";
import PropTypes from "prop-types";

export default class SearchBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: "",
      checked: false
    };
    this.onUpdate = this.onUpdate.bind(this);
  }
  onUpdate() {
    /* console.log(
      `${this.props.label}: ${this.state.checked} ${this.state.filter}`
    ); */
    if (this.props.onUpdate !== undefined) {
      if (this.state.checked) {
        this.props.onUpdate(this.state.filter);
      } else {
        this.props.onUpdate("");
      }
    }
  }
  render() {
    const { id, label, type } = this.props;
    const checkboxId = `check-${id}`;
    const inputType = type || "input";
    return (
      <div className="form-group row mt-2">
        <div className="form-check mt-1">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id={checkboxId}
            onChange={e => {
              this.setState({ checked: e.target.checked }, this.onUpdate);
            }}
          />
          <label htmlFor={checkboxId}>{label}</label>
        </div>
        <div>
          <input
            className="form-control ml-3"
            type={inputType}
            onChange={e => {
              this.setState({ filter: e.target.value }, this.onUpdate);
            }}
          />
        </div>
      </div>
    );
  }
}

SearchBox.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  onUpdate: PropTypes.func
};
