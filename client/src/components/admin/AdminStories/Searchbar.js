import React, { Component } from "react";
import "./stories.css";
class Searchbar extends Component {
  render() {
    const { searchKeyword, handleChange, searchStory } = this.props;
    console.log(this.props);
    return (
      <div className="search_container">
        <input
          className="search_bar"
          name="searchKeyword"
          value={searchKeyword}
          onChange={handleChange}
        />
        <button
          className="search_button"
          onClick={() => searchStory(this.props.allStories, searchKeyword)}
        >
          Search
        </button>
      </div>
    );
  }
}

export default Searchbar;
