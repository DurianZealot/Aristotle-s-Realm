import React from "react";
import SideBar from "../SideBar";
import StoryBlock from "../StoryBlock"
import { uid } from "react-uid";
import { getUserAllStories } from "../../actions/story"
import "./styles.css";


// Similarly implemented to MyProposals
class MyStories extends React.Component {
  state = {
    userId :window.sessionStorage.getItem('currentUser'),
    userStories: null
  }

  componentWillMount() {
    console.log('componentWillMount triggered')
    console.log('Getting from id', this.state.userId)
    this._asyncRequest = getUserAllStories(this.state.userId).then(async(res) => {
      this._asyncRequest = null;
      console.log('From componentWillMount', res.data)
      this.setState({userStories: res.data})
    }).catch(error => console.log(error))
  }

  componentWillUnmount() {
    if(this._asyncRequest){
      this._asyncRequest.cancel()
    }
  }


  render() {

    if(this.state.userStories === null){
    return <div>Loading</div>
    }
    else{
      return (
      <div className="my-stories">
        <SideBar 
            appState={this.props.appState}
        />
        <div className="my-stories-body">
          <h1 className="my-stories-header-text text">My Stories</h1>
          <div className="my-stories-list-container">
            {/* For each story.... */}
            {this.state.userStories.map((story) => {
              return (
                <StoryBlock
                  key={uid(story)}
                  storyId={story._id}
                  storyTitle={story.storyTitle}
                  storyViewCount={story.storyViewCount}
                  storyTags={story.storyTags}
                  storyDate={story.storyDate.split('T')[0]}
                  storyVotes={story.storyVotes}
                  storyChapterNums={story.storyChapters.length}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
      
    }


    // const userId = this.props.appState.currId;

    // const stories = getUserStories(userId);

    
  }
}

export default MyStories;
