import React, { Component } from "react";
import UserSearch from "./UserSearch";
import UserResult from "./UserResult";
import AdminSidebar from "../AdminSidebar"
import $ from "jquery";
import './styles.css'
import {Link} from 'react-router-dom'
import {Button} from '@material-ui/core';
import {adminLogout} from '../../../actions/admin'
import {searchUserWithKeywords, getAllUsers} from '../../../actions/user'

class Admin extends Component {
  state = {
    searchKeyword: "",
    searchResult: {},
  };
  componentDidMount(){
    var matchedUsers;
   
      getAllUsers()
          .then(returnMatchedUsers => {
          console.log('users from search :', returnMatchedUsers)
          matchedUsers = returnMatchedUsers
          this.setState({ searchResult: matchedUsers })   
          })
        .catch(error => {return []})
  }
  handleChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({ [name]: value });
    // console.log(value)
  };

  searchUser = ( searchKeyword) => {
    var matchedUsers;
    // prevent from empty search
    if (searchKeyword !== "") {
      searchUserWithKeywords(searchKeyword)
          .then(returnMatchedUsers => {
          console.log('users from search :', returnMatchedUsers)
          matchedUsers = returnMatchedUsers
          this.setState({ searchResult: matchedUsers })   
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
        <UserResult searchResult={this.state.searchResult}></UserResult>
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
                ADMIN DASHBOARD (MODERATE USERS)
            </span>
        </div>    
        <UserSearch
          searchKeyword={this.state.searchKeyword}
          handleChange={this.handleChange}
          searchUser={() =>
            this.searchUser( this.state.searchKeyword)
          }
        ></UserSearch>
        {search}
      </div>
    );
  }
}

export default Admin;
