import React, { Component } from "react";
import { uid } from "react-uid";
import "./styles.css";
class TagInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tags: ["Sci-Fi", "Romance"],
    };
    this.inputRef = React.createRef();
  }

  checkDuplicate = (newTag) => {
    var tags = this.state.tags;
    let numDuplicates = 0;
    tags.map((tag) => {
      numDuplicates += tag === newTag;
    });
    if (numDuplicates > 0) {
      return false;
    } else {
      return true;
    }
  };

  addNewTag = (event) => {
    // check what key is pressed
    var code = event.keyCode ? event.keyCode : event.which;
    const tags = this.state.tags;
    const newTag = event.target.value;
    if (code === 13 && newTag) {
      if (tags.find((tag) => tag.toLowerCase() === newTag.toLowerCase())) {
        return alert("No Duplicate Tags Allowed!");
      }
      tags.push(newTag);
      this.setState({ tags });
      this.props.page.setState({ tags: this.state.tags })
      console.log(this.props.page.state)
      // when submit tag, set current input filled to be null
      this.inputRef.current.value = null;
    } else if (code === 8 && !newTag) {
      // if no value and hit backspace is entered we will remove the previous tag
      this.removeTag(tags[tags.length - 1]);
    }
  };

  removeTag = (oldTag) => {
    // remove an existing tag
    let index = this.state.tags.indexOf(oldTag);
    const newTags = this.state.tags;
    newTags.splice(index, 1);
    this.setState({ tags: newTags });
    this.props.page.setState({ tags: this.state.tags })
    console.log(this.props.page.state)
  };

  remove;

  render() {
    const { tags } = this.state;
    return (
      <div className="tags">
        <ul>
          {tags.map((tag) => {
            return (
              <li key={uid(tag)} className="tag">
                {tag}
                <button onClick={() => this.removeTag(tag)}>+</button>
              </li>
            );
          })}
          <li className="input-tag">
            <input
              onKeyDown={this.addNewTag}
              type="text"
              size="4"
              ref={this.inputRef}
            ></input>
          </li>
        </ul>
      </div>
    );
  }
}

export default TagInput;
