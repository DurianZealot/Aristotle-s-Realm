import { Button } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import {
  createNewChapter,
  deleteStory,
  updateCareerStats,
} from "../../actions/story";
import ChapterModal from "./newChapter.js";
import "./styles.css";

class StoryBlock extends React.Component {
  delete = async (storyId) => {
    var answer = window.confirm(
      "Are you sure to delete this story? This will wipe out all data."
    );
    if (answer) {
      deleteStory(storyId)
        .then(() => {
          updateCareerStats(
            window.sessionStorage.getItem("currentUser"),
            (-1)
          ).then((updatedCareer) => {
            if (updatedCareer) {
              return Promise.resolve();
            } else {
              alert("Failed to update career stats.");
              return;
            }
          });
          alert("You delete this story!");
          window.location.reload();
        })
        .catch((error) => {
          alert("Fail to delete this story");
        });
    }
  };

  render() {
    const {
      storyId,
      storyTitle,
      storyViewCount,
      storyTags,
      storyDate,
      storyVotes,
      storyChapterNums,
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
          <span className="stories-subitem">
            Upvotes/Downvotes: {storyVotes[0]}/{storyVotes[1]}
          </span>
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
            <Link to={`/proposals/getAll/${storyId}`}>
              <span>View Proposals to this story</span>
            </Link>
          </span>
          <Button
            style={{
              float: "right",
              marginTop: "2%",
              marginRight: "1%",
              display: "inline",
            }}
            onClick={() => this.delete(storyId)}
            color="primary"
            variant="contained"
          >
            Delete
          </Button>
          <ChapterModal
            style={{ float: "right", marginTop: "2%", marginRight: "1%" }}
            viewFrom="story_author"
            storyTitle={storyTitle}
            storyChapterNums={storyChapterNums}
            storyId={storyId}
          ></ChapterModal>
        </p>
      </div>
    );
  }
}

export default StoryBlock;
