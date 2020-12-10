import React from "react";
import "./styles.css";

class StoryPageInfo extends React.Component {
  render() {
    const { story } = this.props;
    return (
      <div className="story-page-info-wrapper">
        <dl className="story-page-info-list">
          <dt className="story-page-info-term">Date Began:</dt>
          {/* Only save the date of the date time */}
          <dd className="story-page-info-item">{story.storyDate.split('T')[0]}</dd>
          <dt className="story-page-info-term">Tags:</dt>
          <dt className="story-page-info-term">Views:</dt>
          <dd className="story-page-info-item">{story.storyViewCount}</dd>
          <dt className="story-page-info-term">Upvotes:</dt>
          <dd className="story-page-info-item">{story.storyVotes[0]}</dd>
          <dt className="story-page-info-term">Downvotes:</dt>
          <dd className="story-page-info-item">{story.storyVotes[1]}</dd>
        </dl>
      </div>
    );
  }
}
export default StoryPageInfo;
