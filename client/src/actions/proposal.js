"use strict"

import Axios from "axios"
import {getUserID} from './user'
const log = console.log

export const postProposal = async function(proposeToID, proposeToTitle, proposeChapter, visibility, content, proposalByUsername, status = 'pending'){
    getUserID(proposalByUsername)
        .then(userID => {
            Axios({
                method: 'post',
                url:'/proposal/' + userID,
                data: {
                    proposeToID,
                    proposeToTitle,
                    proposeChapter,
                    proposeByUsername,
                    visibility,
                    content,
                    status
                }
              });
        })
        .then(res => {
            if(res.status === 200){
                return true
            }
            else{
                return false
            }
        })
        .catch(error => log(error))
}