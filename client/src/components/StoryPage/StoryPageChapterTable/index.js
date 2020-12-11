import React from "react";
import { uid } from "react-uid";
import { Link } from "react-router-dom";
import "./styles.css";

class StoryPageChapterTable extends React.Component {
  render() {
    const { story, chapterNum } = this.props;

    return (
      <div className="story-page-chapter-table-wrapper">
        <table className="story-page-chapter-table">
          <tbody className="story-page-chapter-tbody">
            <tr>
              <td className="story-page-chapter-td">
                <Link to={`/article/${story._id}/1`}>&#171;</Link>
              </td>
              {story.storyChapters.map((chapter, i) => {
                if (chapterNum == i + 1) {
                  return (
                    <td
                      className="story-page-chapter-td story-page-chapter-current"
                      key={uid(chapter)}
                    >
                      <Link to={`/article/${story._id}/${i + 1}`}>
                        {i + 1}
                      </Link>
                    </td>
                  );
                }
                return (
                  <td className="story-page-chapter-td" key={uid(chapter)}>
                    <Link to={`/article/${story._id}/${i + 1}`}>
                      {i + 1}
                    </Link>
                  </td>
                );
              })}
              <td className="story-page-chapter-td">
                <Link
                  to={`/article/${story._id}/${story.storyChapters.length}`}
                >
                  &#187;
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
export default StoryPageChapterTable;
