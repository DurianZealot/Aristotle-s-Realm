// Methods in this file are used in the StoryPage component

const log = console.log;

export const getStory = async (storyId) => {
  // log("getting data for a story");
  // log("Story Id: " + storyId);
  // the URL for the request
  const url = `/story/${storyId}`;

  // Since this is a GET request, simply call fetch on the URL
  await fetch(url)
      .then(async (res) => {
          if (res.status === 200) {
              // return a promise that resolves with the JSON body
              const storyJSON = await res.json();
              const story = {
                storyAuthorID: storyJSON._id,
                storyTitle: storyJSON.storyTitle,
                storyAuthor: storyJSON.storyAuthor,
                storyDate: storyJSON.storyDate,
                storyViewCount: storyJSON.storyViewCount,
                storyTags: storyJSON.storyTags,
                storyVotes: storyJSON.storyVotes,
                storyChapters: storyJSON.storyChapters
              }
              return story
          } else {
              alert("Could not get story");
          }
      })
      .catch(error => {
          console.log(error);
      });

};
