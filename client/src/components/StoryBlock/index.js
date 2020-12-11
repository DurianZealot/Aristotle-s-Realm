import { Button } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import { createNewChapter } from "../../actions/story";
import ChapterModal from './newChapter.js'
import "./styles.css";

class StoryBlock extends React.Component {
  delete = () => {
    var answer = window.confirm('Are you sure to delete this story? This will wipe out all data.')
    if (answer){
      alert('You delete this story!')
    }
  }

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
          <span className="stories-subitem">
            <Link to={`/proposals/${storyId}`}>
              <span>View Proposals to this story</span>
            </Link>
          </span>
          <Button style={{float:'right', marginTop:'2%', marginRight:'1%', display: 'inline'}} onClick={() => this.delete()}color="primary" variant="contained">Delete</Button>
          <ChapterModal style={{float:'right', marginTop:'2%', marginRight:'1%'}} viewFrom = 'story_author' title={storyTitle}></ChapterModal>
        </p>
       
      </div>
    );
  }
}

export default StoryBlock;
