import React, { Component } from "react";
import PropTypes from "prop-types";

export default class MovieList extends Component {
  constructor(props) {
    super(props);
    // console.log(props.items);
  }
  movieItems() {
    return this.props.items.map(item => (
      <li className="list-group-item d-flex justify-content-between">
        <strong>{item.title}</strong>{" "}
        <span style={{ width: "90px" }}>
          <strong>Rating:</strong> {item.imdbRating || "-"}
        </span>
      </li>
    ));
  }
  render() {
    return (
      <div className="row" style={{ minHeight: "246px" }}>
        <ul className="list-group col-12">{this.movieItems.bind(this)()}</ul>
      </div>
    );
  }
}

MovieList.propTypes = {
  items: PropTypes.array.isRequired
};
