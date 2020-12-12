import React, { Component } from "react";
import {uid} from "react-uid";
import { Button } from "@material-ui/core";
import { deleteUser } from "../../../actions/user";
class UserResult extends Component {

  handleDelete = (userID)=>{
     deleteUser(userID)
     alert("successfully deleted user")
     window.location.reload()
  }

  render() {
    return (
      <div>
        <ul className="search_result_list">
        {this.props.searchResult.map((user) => {
             const username = user.username
             const firstName = user.firstName
             const lastName = user.lastName
             const age = user.age
            return (
              <li className="search_result" key={uid(firstName)}>
                <div >
                  <span className="inline-flex">
                    <p className="black">Username: </p>
                    <p className=" grey">{username}</p>
                  </span>
                </div>
                <div>
                  <span className="inline-flex">
                    <p className="black">Age: </p>
                    <p className="grey">
                      {age}
                    </p>
                  </span>
                </div>
                 
                
                <div>
                  <span className="inline-flex">
                    <p className="black">firstName: </p>
                    <p className=" grey">{firstName}</p>
                  </span>
                </div>
                <div>
           
                  <span className="inline-flex">
                    <p className="black">lastName: </p>
                    <p className=" grey">
                      {lastName}
                    </p>
                  </span>
                </div>
                <div className='delete_button'>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => this.handleDelete(user._id)}
                    >
                    Delete
                  </Button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default UserResult;
