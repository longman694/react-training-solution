import React, { Component } from "react";
import ReactDOM from "react-dom";

import SearchPanel from "./search-panel";
import MoviePage from "./movie-page";

import "./styles.scss";
import moviesData from "./movie.json";

function filterMovies(items, name, rate) {
  let filteredItems = items;
  if (name) {
    // console.log("Name filter");
    filteredItems = filteredItems.filter(item => {
      return item.title.toLowerCase().includes(name.toLowerCase());
    });
  }
  // console.log(filteredItems.length);
  if (Number.isInteger(rate)) {
    // console.log("Rate filter");
    filteredItems = filteredItems.filter(item => {
      return Math.floor(item.imdbRating) === rate;
    });
  }
  // console.log(filteredItems.length);
  return filteredItems;
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: moviesData
    };
    this.onSearch = this.onSearch.bind(this);
  }
  onSearch(name, rate) {
    // console.log(`Search: ${name}, ${rate}`);
    if (!name && rate == null) {
      this.setState({ items: moviesData });
      return;
    }
    this.setState({ items: filterMovies(moviesData, name, rate) });
  }
  render() {
    return (
      <div className="App container">
        <h1>Movie Data</h1>
        <SearchPanel onSearch={this.onSearch} />
        <MoviePage items={this.state.items} />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
