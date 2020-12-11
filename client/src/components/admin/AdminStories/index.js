import React, { Component } from "react";
import Searchbar from "./Searchbar";
import SearchResult from "./SearchResult";
import AdminSidebar from "../AdminSidebar"
import $ from "jquery";
import "./stories.css";
import {Link} from 'react-router-dom'
import {Button} from '@material-ui/core';
import {adminLogout} from '../../../actions/admin'
import {searchStoryWithKeywords} from '../../../actions/story'

class AdminStories extends Component {
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

  searchStory = ( searchKeyword) => {
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
      <div className='admin_search_container'>
        <AdminSidebar></AdminSidebar>
        <div className='admin_title_container'> 
            <Link className="admin_logout-link" to={"/"} onClick={() => adminLogout()}> 
                <Button className="button" color='primary' variant="contained" size="large">Logout</Button>
            </Link>
            <span className='admin_title_text'>
                ADMIN DASHBOARD (MODERATE STORIES)
            </span>
        </div>    
        <Searchbar
          searchKeyword={this.state.searchKeyword}
          handleChange={this.handleChange}
          searchStory={() =>
            this.searchStory( this.state.searchKeyword)
          }
        ></Searchbar>
        {search}
      </div>
    );
  }
}

export default AdminStories;