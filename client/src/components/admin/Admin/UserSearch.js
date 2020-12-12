import React, { Component } from "react";
class UserSearch extends Component {
  render() {
    const { searchKeyword, handleChange, searchUser } = this.props;
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
          onClick={() => searchUser(searchKeyword)}
        >
          Search
        </button>
      </div>
    );
  }
}
export default UserSearch;