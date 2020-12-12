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
                <span className="inline-block">
                  <span className="inline-flex">
                    <p className="black">Username: </p>
                    <p className="story_line truncate grey">{username}</p>
                  </span>
                  <span className="inline-flex">
                    <p className="black">Age: </p>
                    <p className="story_preview truncate grey">
                      {age}
                    </p>
                  </span>
                </span>
                <span className="inline-block">
                  <span className="inline-flex">
                    <p className="black">firstName: </p>
                    <p className="story_line truncate grey">{firstName}</p>
                  </span>
                  <span className="inline-flex">
                    <p className="black">lastName: </p>
                    <p className="story_preview truncate grey">
                      {lastName}
                    </p>
                  </span>
                </span>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => this.handleDelete(user._id)}
                    >
                    Delete
                  </Button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default UserResult;
