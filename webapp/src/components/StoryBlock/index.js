import React from "react";
import "./styles.css";

class StoryBlock extends React.Component {
  render() {
    const {
        storyTitle,
        storyViewCount,
        storyTags,
        storyDate
    } = this.props

    return (
      <div className="my-stories-list-item">
        {/* Currently the image is HARDCODED in CSS */}
        <div className="my-stories-list-item-icon"></div>
        <p className="stories-item text">
          <span>Title: {storyTitle} </span>
          <span className="stories-subitem">
            Views: {storyViewCount}
          </span>
        </p>
        <p className="stories-item text">Started On: {storyDate} </p>
        <p className="stories-item text">Tags: {storyTags.map((tag, i) => {
            if (i === (storyTags.length - 1) ) {
                return tag;
            }
            return tag + ", "
        })}</p>
      </div>
    );
  }
}

export default StoryBlock