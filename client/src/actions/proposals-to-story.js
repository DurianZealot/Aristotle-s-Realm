// Methods in this file are used in the ProposalsToStory component

import Axios from "axios";

const log = console.log;

export const getStoryProposals = async (storyId) => {
  const url = `/proposals/${storyId}`;
    return Axios({
      method:'get',
      url: url
    }).then(response => {return Promise.resolve(response.data)})
    .catch(error => {return Promise.reject()})
};
