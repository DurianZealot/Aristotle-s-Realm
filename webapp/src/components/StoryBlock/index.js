import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

class StoryBlock extends React.Component {
  render() {
    const {
      storyId,
      storyTitle,
      storyViewCount,
      storyTags,
      storyDate,
      storyVotes,
    } = this.props;

    console.log(storyVotes);

    return (
      <div className="my-stories-list-item">
        {/* Currently the image is HARDCODED in CSS */}
        <div className="my-stories-list-item-icon"></div>
        <p className="stories-item text">
          <span>
            Title:{" "}
            <Link to={`/article/${storyId}/1`}>
              <span>{storyTitle}</span>
            </Link>
          </span>
          <span className="stories-subitem">Views: {storyViewCount}</span>
        </p>
        <p className="stories-item text">
          Started On: {storyDate}
          <span className="stories-subitem">Upvotes/Downvotes: {storyVotes[0]}/{storyVotes[1]}</span>
        </p>
        <p className="stories-item text">
          Tags:{" "}
          {storyTags.map((tag, i) => {
            if (i === storyTags.length - 1) {
              return tag;
            }
            return tag + ", ";
          })}
        </p>
      </div>
    );
  }
}

export default StoryBlock;
