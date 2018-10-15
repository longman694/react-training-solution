import React, { Component } from "react";
import PropTypes from "prop-types";

import MovieList from "./movie-list";
import Pagination from "./pagination";

export default class MoviePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1
    };
    this.onPageChange = this.onPageChange.bind(this);
  }
  onPageChange(page) {
    this.setState({ page });
  }
  render() {
    const { page } = this.state;
    const { items } = this.props;
    const displayItems = items.slice((page - 1) * 5, page * 5);
    return (
      <div>
        <MovieList items={displayItems} />
        <Pagination items={items} onPageChange={this.onPageChange} />
      </div>
    );
  }
}

MoviePage.PropTypes = {
  items: PropTypes.array.isRequired
};
