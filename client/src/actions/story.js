"use strict";

import { render } from '@testing-library/react';

const log = console.log;
const axios = require('axios')

export const createAStory = async function (userID, storyTitle, storyDate=Date.now(), storyTags, storyViewCount, storyChapters, storyPreview, storyLine){
    return axios('/story/'+userID, {
        method: 'post',
        data:{
            storyTitle,
            storyDate,
            storyTags,
            storyViewCount,
            storyChapters,
            storyPreview,
            storyLine
        }
    })
    .then(res => {
        if (res.status == 200){
            // console.log('Story is created successfuly, return true')
            return true
        }
        return false
    })
    .catch(error => {return false})
}

// Get stories that match keywords 
export const searchStoryWithKeywords = async function(searchKeyword){
    return axios('/search/story', {
        method:'get',
        params:{
            keyword: searchKeyword
        }
    })
        .then(response => {return Promise.resolve(response.data)})
        .catch(error => {return Promise.reject()})
}


export const createNewChapter = async function(storyID, chapterNum, chapterContent) {
    return axios({
        method:'post',
        url: `/story/${storyID}/chapter/${chapterNum}`,
        data: {
            storyChapterContent:chapterContent
        }
    }).then(res => {return Promise.resolve(res)})
    .catch(error => {return Promise.reject()})

}

export const getUserAllStories = async function(storyAuthorID) {
    return axios({
        method:'get',
        url: '/story',
        params : {
            user : storyAuthorID
        }
    }).then(res => {console.log('From getUserAllStories', res); return res})
      .catch(error => {return Promise.reject(error)})
}

export const voteStory = async function(storyID, vote) {
    // 0 for downvote, 1 for upvote
    return axios({
        method: 'post',
        url: '/vote',
        params:{
            storyID,
            vote
        }
    }).then(data => {return Promise.resolve(data)})
      .catch(error => {return Promise.reject(error)})
}

export const increaseStoryView = async function(storyID) { 
    return axios({
        method:'post',
        url:'/story/updateView',
        data:{
            storyID
        }
    }).then(data => {return Promise.resolve()}).catch(error => {return Promise.reject()})
}