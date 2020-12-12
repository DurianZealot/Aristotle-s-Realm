"use strict";

import axios from "axios";
import { getUsername } from "./user";
const log = console.log;

export const postProposal = async function (
  proposeToID,
  proposeToTitle,
  proposeChapter,
  visibility,
  content,
  proposeByID,
  status = "pending"
) {
  return getUsername(proposeByID)
    .then((username) => {
      const proposeByUsername = username.data;
      return axios({
        method: "post",
        url: `/proposal/${proposeByID}`,
        data: {
          proposeToID,
          proposeToTitle,
          proposeChapter,
          proposeByUsername,
          visibility,
          content,
          status,
        },
      });
    })
    .catch((error) => log(error));
};


export const updateProposalStatus = async function(proposalID, proposalStatus) {
  return axios({
    method:'post',
    url:'/proposalUpdateStatus',
    data:{
      proposalStatus,
      proposalID
    }
  }).then(response => {return Promise.resolve(response)})
  .catch(error => {return Promise.reject()})
}

export const deleteProposal = async function(propsalID) {
    return axios({
      method:'delete',
      url:'/proposalDelete',
      data:{
        propsalID
      }
    }).then(response => {return Promise.resolve(response)})
    .catch(error => {return Promise.reject()})
}