// Methods in this file are used in the StoryPage component

import Axios from "axios";

const log = console.log;

export const getStory = async (storyId) => {
  // log("getting data for a story");
  // log("Story Id: " + storyId);
  // the URL for the request
  const url = `/story/${storyId}`;

  return Axios({
      method: 'get',
      url: url
  })
    .then(res => {return res})
    .catch(error => {console.log(error);})
};

