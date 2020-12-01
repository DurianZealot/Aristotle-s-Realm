import React from "react";
import SideBar from "../SideBar";
import StoryBlock from "../StoryBlock"
import { uid } from "react-uid";
import { getUserStories } from "../../actions/user-profile"
import "./styles.css";


// Similarly implemented to MyProposals
class MyStories extends React.Component {
  render() {
    const userId = this.props.appState.currId;

    const stories = getUserStories(userId);

    return (
      <div className="my-stories">
        <SideBar 
            appState={this.props.appState}
        />
        <div className="my-stories-body">
          <h1 className="my-stories-header-text text">My Stories</h1>
          <div className="my-stories-list-container">
            {/* For each story.... */}
            {stories.map((story) => {
              return (
                <StoryBlock
                  key={uid(story)}
                  storyId={story.storyId}
                  storyTitle={story.storyTitle}
                  storyViewCount={story.storyViewCount}
                  storyTags={story.storyTags}
                  storyDate={story.storyDate}
                  storyVotes={story.storyVotes}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default MyStories;
