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
