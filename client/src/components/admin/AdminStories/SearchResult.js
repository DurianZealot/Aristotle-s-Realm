import React, { Component } from "react";
import { Link, Route, Switch } from "react-router-dom";
import {uid} from "react-uid";
import { TextField, Button } from "@material-ui/core";
import { deleteStory } from "../../../actions/story";
import "./stories.css";
class SearchResult extends Component {

  handleDelete = (storyID)=>{
     deleteStory(storyID)
     alert("successfully deleted story")
     window.location.reload()
  }

  render() {
    return (
      <div>
        <ul className="search_result_list">
        {this.props.searchResult.map((story) => {
            const storyId = story._id
            const name = story.storyTitle
            const storyLine = story.storyLine
            const storyPreview = story.storyPreview === '' ? 'Not Given' :  story.storyPreview
            const created = story.storyDate.split('T')[0]
            return (
              <li className="search_result" key={uid(name)}>
                <span>
                  <Link to={`/article/${storyId}/1`}>
                    <h4 className="story_name">{name}</h4>
                  </Link>
                  <span className="last_update">
                    <span className="black">Created at: </span>
                    <span className="grey">{created}</span>
                  </span>
                </span>
                <span className="inline-block">
                  <span className="inline-flex">
                    <p className="black">Story Line: </p>
                    <p className="story_line truncate grey">{storyLine}</p>
                  </span>
                  <span className="inline-flex">
                    <p className="black">Story Preview: </p>
                    <p className="story_preview truncate grey">
                      {" "}
                      {storyPreview}{" "}
                    </p>
                  </span>
                </span>
                <div className='delete_button'>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => this.handleDelete(storyId)}
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

export default SearchResult;
