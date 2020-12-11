import React, { Component } from "react";
import Searchbar from "./Searchbar";
import SearchResult from "./SearchResult";
import $ from "jquery";
import "./stories.css";

class AdminUsers extends Component {
  state = {
    searchKeyword: "",
    searchResult: {},
  };

  handleChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({ [name]: value });
    // console.log(value)
  };

  searchUsers = (allUsers, searchKeyword) => {
    // return a list of stories whose name contains `this.state.searchKeyword`
    function getUsersByKeyword(allMatched, key) {
      if (
        key.toLowerCase().includes(searchKeyword.toLowerCase()) ||
        key.toUpperCase().includes(searchKeyword.toUpperCase())
      ) {
        allMatched[key] = allUsers[key];
      }
      // console.log(this.state)
      return allMatched;
    }

    var matchedUsers = {};
    // prevent from empty search
    if (searchKeyword !== "") {
      matchedUsers = Object.keys(allUsers).reduce(getUsersByKeyword, {});
    }

    // update state and log the search result in the console
    this.setState(
      (state) => ({ searchResult: matchedUsers }),
      () => {
        console.log(Object.keys(this.state.searchResult));
      }
    );
  };

  render() {
    let search;
    // jQuery use here to check if searchResult is empty
    if (!$.isEmptyObject(this.state.searchResult)) {
      console.log("have answer");
      search = (
        <SearchResult searchResult={this.state.searchResult}></SearchResult>
      );
    }
    return (
      <div>
        <Searchbar
          allUsers={this.props.appState.users}
          searchKeyword={this.state.searchKeyword}
          handleChange={this.handleChange}
          searchUsers={() =>
            this.searchUsers(this.props.data, this.state.searchKeyword)
          }
        ></Searchbar>
        {search}
      </div>
    );
  }
}

export default AdminUsers;