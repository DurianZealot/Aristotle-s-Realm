import React, { Component } from "react";
import "./style.css";
class Searchbar extends Component {
  render() {
    const { searchKeyword, handleChange, searchStory } = this.props;
    console.log(this.props);
    return (
      <div className="search-container">
        <input
          className="search-bar"
          name="searchKeyword"
          value={searchKeyword}
          onChange={handleChange}
        />
        <button
          className="search-button"
          onClick={() => searchStory( searchKeyword)}
        >
          Search
        </button>
      </div>
    );
  }
}

export default Searchbar;
