import React, { Component } from "react";
import PropTypes from "prop-types";

import SearchBox from "./search-box";

export default class SearchPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      rate: null
    };
    this.onNameSearchUpdate = this.onNameSearchUpdate.bind(this);
    this.onRateSearchUpdate = this.onRateSearchUpdate.bind(this);
    this.onClick = this.onClick.bind(this);
  }
  onNameSearchUpdate(name) {
    this.setState({ name });
  }
  onRateSearchUpdate(rate) {
    if (rate || rate === "0") {
      this.setState({
        rate: parseInt(rate)
      });
    } else {
      this.setState({
        rate: null
      });
    }
  }
  onClick() {
    this.props.onSearch(this.state.name, this.state.rate);
  }
  render() {
    return (
      <div className="row d-flex d-flex align-items-end">
        <div className="col-sm-8">
          <SearchBox
            id="movie-name"
            label="Movie Name"
            onUpdate={this.onNameSearchUpdate}
          />
          <SearchBox
            id="rate"
            label="IMDB Rating"
            type="number"
            onUpdate={this.onRateSearchUpdate}
          />
        </div>
        <div className="col-sm-4 mb-3">
          <button className="btn btn-dark" onClick={this.onClick}>
            Search
          </button>
        </div>
      </div>
    );
  }
}

SearchPanel.PropTypes = {
  onSearch: PropTypes.func.isRequired
};
