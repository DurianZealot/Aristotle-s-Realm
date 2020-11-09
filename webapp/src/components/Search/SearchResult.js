import React, { Component } from "react";
import { Link, Route, Switch } from "react-router-dom";
import {uid} from "react-uid";
import "./style.css";
class SearchResult extends Component {
  render() {
    // this.props.searchResult is a JSON, so get a list of keys first
    const storyNames = Object.keys(this.props.searchResult);
    return (
      <div>
        <ul className="search-result-list">
          {storyNames.map((name) => {
            const {
              authorId,
              lastUpdate,
              storyLine,
              storyPreview,
            } = this.props.searchResult[name];
            return (
              <li className="search-result" key={uid(name)}>
                <span>
                  <Link to={`/aritcle=${name}`}>
                    <h4 className="story-name">{name}</h4>
                  </Link>
                  <span className="last-update">
                    <span className="black">Most Recent Update: </span>
                    <span className="grey">{lastUpdate}</span>
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
