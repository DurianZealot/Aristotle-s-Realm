"use strict";
const log = console.log;

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

export const register = async function(username, password, firstName, lastName, birthday){
    // Create a new request with parameters we need
    const request = new Request ("/api/users", {
        method: "post",
        body: JSON.stringify({username, password, firstName, lastName, birthday}),
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