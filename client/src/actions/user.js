"use strict";
const log = console.log;
const axios = require('axios')

export const login = async function(username, password, form){
    // Create a new request with parameters we need
    const request = new Request ("/users/login", {
        method: "post",
        body: JSON.stringify({username, password}),
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json"
        }
    })

    // Send the request with fetch() async
    const response = await fetch(request)
    if (response.status === 200){
        const returnJson = await response.json()
        if(returnJson.currentUser !== undefined){
            form.setState({currID: returnJson.currentUser, currentUser: username})
            return true;
        }
    }
    else{
        return false;
    }
    
}

export const register = async function(username, password, firstName, lastName,age){
    // Create a new request with parameters we need
    const request = new Request ("/api/users", {
        method: "post",
        body: JSON.stringify({username, password, firstName, lastName, age}),
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json"
        }
    })

    // Send the request with fetch() async
    const response = await fetch(request)
    if (response.status === 200){
        return true;
    }
    else{
        return false;
    }
    
}

export const logout = async()=>{
    const request = new Request ("/logout", {
        method: "get",
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json"
        }
    })

    // Send the logout request with fetch() async
    const response = await fetch(request)
    if (response.status !== 500){
        // log out successfully
        window.sessionStorage.clear()
        // refresh so that the navigation bar will change immediately
        window.location.reload()
    }    
}

// Get a user id in database by username
export const getUserID = async (username) => {
    axios.get('/getUserID', {
        params: {
            username
        }
    })
        .then(data => {return Promise.resolve(data)})
        .catch(error => {return Promise.reject()})
}


// Get a username in database by userID
export const getUsername = async (userID) => {
    return axios({
        method: 'get',
        url: '/getUsername',
        params: {
            userID
        }
    })
        .then(data => {console.log('In getUsername', data); return data})
        .catch(error => {return Promise.reject()})
}

//delete user
export const deleteUser= async function(userID) { 
    return axios({
        method:'delete',
        url:'/user',
        data:{
            userID
        }
    }).then(data => {return Promise.resolve()}).catch(error => {return Promise.reject()})
}

// Get all users
export const getAllUsers = async function(){
    return axios('/search/alluser', {
        method:'get',
    })
        .then(response => {return Promise.resolve(response.data)})
        .catch(error => {return Promise.reject()})
}
//get user by username
export const searchUserWithKeywords = async function(searchKeyword){
    return axios('/search/user', {
        method:'get',
        params:{
            keyword: searchKeyword
        }
    })
        .then(response => {return Promise.resolve(response.data)})
        .catch(error => {return Promise.reject()})
}

