import React, { Component } from "react";
import { Link, Route, Switch } from "react-router-dom";
import {uid} from "react-uid";
import "./style.css";
class SearchResult extends Component {
  render() {
    return (
      <div>
        <ul className="search-result-list">
          {this.props.searchResult.map((story) => {
            const storyId = story._id
            const name = story.storyTitle
            const storyLine = story.storyLine
            const storyPreview = story.storyPreview === '' ? 'Not Given' :  story.storyPreview
            const created = story.storyDate.split('T')[0]
            return (
              <li className="search-result" key={uid(name)}>
                <span>
                  <Link to={`/article/${storyId}/1`}>
                    <h4 className="story-name">{name}</h4>
                  </Link>
                  <span className="last-update">
                    <span className="black">Created at: </span>
                    <span className="grey">{created}</span>
                  </span>
                </span>
                <span className="inline-block">
                  <span className="inline-flex">
                    <p className="black">Story Line: </p>
                    <p className="story-line truncate grey">{storyLine}</p>
                  </span>
                  <span className="inline-flex">
                    <p className="black">Story Preview: </p>
                    <p className="story-preview truncate grey">
                      {" "}
                      {storyPreview}{" "}
                    </p>
                  </span>
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default SearchResult;
