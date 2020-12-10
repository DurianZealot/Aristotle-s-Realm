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
  state = {
    story : null,
  }
  componentWillMount() {
    this._asyncRequestStory = getStory(this.props.params.storyId).then(async(res) => {
      this._asyncRequestStory = null;
      this.setState({story : res.data})
    })
  }
  componentWillUnmount() {
    if (this._asyncRequestStory) {
      this._asyncRequestStory.cancel();
    }
  }
  render() {
    if(this.state.story === null){
      return <div>Loading</div>
    }
    
    const chapterNum = this.props.params.chapterNum;
    return (
      <div className="story-page">
          <SideBar appState={this.props.appState} />
          <div className="story-page-wrapper">
          <div className="story-page-body">
            <div className="story-page-content">
              <StoryPageInfo story={this.state.story} />
              <StoryPageChapterTable story={this.state.story} chapterNum={chapterNum} />
              <StoryPageMain story={this.state.story} chapterNum={chapterNum} />
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
    )  
  }
}

export default StoryPage;
