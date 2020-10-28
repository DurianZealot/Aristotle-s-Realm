import React, { Component } from "react";
import Searchbar from "./Searchbar";
import "./style.css";

class Search extends Component {
  state = {
    searchKeyword: "",
  };
  handleChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({ [name]: value });
    // console.log(value)
  };

  render() {
    return (
      <div>
        <h1 className="search-header"> Search stories with keywords... </h1>
        <Searchbar
          searchKeyword={this.state.searchKeyword}
          handleChange={this.handleChange}
        ></Searchbar>
      </div>
    );
  }
}

export default Search;
