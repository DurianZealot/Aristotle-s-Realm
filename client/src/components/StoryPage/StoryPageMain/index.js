import React from "react";
import "./styles.css";
import { getUsername } from "../../../actions/user";

class StoryPageMain extends React.Component {
  state = {
    storyAuthor: null
  }
  componentWillMount() {
    this._asyncRequestUsername = getUsername(this.props.story.storyAuthorID).then(async(res) => {
      this._asyncRequestUsername = null;
      this.setState({storyAuthor : res.data})
    }).catch(error => console.log(error))
  }
  componentWillUnmount() {
    if (this._asyncRequestUsername) {
      this._asyncRequestUsername.cancel();
    }
  }

  render() {
    if(this.state.storyAuthor){
    const { story, chapterNum } = this.props;

    return (
      <div className="story-page-main-wrapper">
        {/* This is the wrapper for the title and author of the story, and the actual story itself */}
        <div className="story-page-title-author-wrapper">
          <h2 className="story-page-title-header">{story.storyTitle}</h2>
          <h3 className="story-page-author-header">by {this.state.storyAuthor}</h3>
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
    else{
      return <div>Loading</div>;
    }
    
  }
}
export default StoryPageMain