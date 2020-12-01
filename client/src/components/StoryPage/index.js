import React from "react";
import SideBar from "../SideBar";
import Button from "@material-ui/core/Button";
import { getStory } from "../../actions/story-page";
import StoryPageInfo from "./StoryPageInfo";
import StoryPageChapterTable from "./StoryPageChapterTable";
import StoryPageMain from "./StoryPageMain";
import "./styles.css";
import { Box } from "@material-ui/core";

class StoryPage extends React.Component {
  render() {
    const params = this.props.params;
    const story = getStory(params.storyId);
    const chapterNum = params.chapterNum; // Used for css text bolding
    console.log(story);
    console.log(chapterNum);

    return (
      <div className="story-page">
        <SideBar appState={this.props.appState} />
        <div className="story-page-wrapper">
          <div className="story-page-body">
            <div className="story-page-content">
              <StoryPageInfo story={story} />
              <StoryPageChapterTable story={story} chapterNum={chapterNum} />
              <StoryPageMain story={story} chapterNum={chapterNum} />
            </div>
            {/* Put buttons in the 'main' div */}
            <div className="story-page-feedback-wrapper">
              <Box mr={1.5} className="story-page-feedback-button">
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  onClick={() => alert("You've successfully upvoted.")}
                >
                  Upvote
                </Button>
              </Box>
              <Box mr={1.5} className="story-page-feedback-button">
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  onClick={() => alert("You've successfully downvoted.")}
                >
                  Downvote
                </Button>
              </Box>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default StoryPage;
