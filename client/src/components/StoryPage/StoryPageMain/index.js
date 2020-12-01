import React from "react";
import "./styles.css";

class StoryPageMain extends React.Component {
  render() {
    const { story, chapterNum } = this.props;

    return (
      <div className="story-page-main-wrapper">
        {/* This is the wrapper for the title and author of the story, and the actual story itself */}
        <div className="story-page-title-author-wrapper">
          <h2 className="story-page-title-header">{story.storyTitle}</h2>
          <h3 className="story-page-author-header">by {story.storyAuthor}</h3>
        </div>
        <div className="story-page-chapter-content">
          <div className="story-page-chapter-number-wrapper">
            <h3 className="story-page-chapter-number-header">
              Chapter {chapterNum}
            </h3>
          </div>
          <div className="story-page-chapter-text">
            {story.storyChapters[chapterNum - 1]}
          </div>
        </div>
      </div>
    );
  }
}
export default StoryPageMain