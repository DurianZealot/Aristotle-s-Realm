import React, { Component } from "react";
import Searchbar from "./Searchbar";
import SearchResult from "./SearchResult";
import $ from "jquery";
import "./style.css";
import SideBar from "../SideBar";
import {searchStoryWithKeywords} from '../../actions/story'

class Search extends Component {
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

  searchStory = async(searchKeyword) => {
    var matchedStories;
    // prevent from empty search
    if (searchKeyword !== "") {
      searchStoryWithKeywords(searchKeyword)
          .then(returnMatchedStories => {
          console.log('stories from search :', returnMatchedStories)
          matchedStories = returnMatchedStories
          this.setState({ searchResult: matchedStories })   
          })
        .catch(error => {return []})
    }
    
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
        <SideBar appState={this.props.appState}></SideBar>
        <h1 className="search-header"> Search stories with keywords... </h1>
        <Searchbar
          // allStories={this.props.data}
          searchKeyword={this.state.searchKeyword}
          handleChange={this.handleChange}
          searchStory={() =>
            this.searchStory(this.state.searchKeyword)
          }
        ></Searchbar>
        {search}
      </div>
    );
  }
}

export default Search;
