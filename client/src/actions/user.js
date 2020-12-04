"use strict";
const log = console.log;

export const login = async function(username, password, app){
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
            app.setState({currID: returnJson.currentUser, currentUser: username})
            return true;
        }
    }
    else{
        return false;
    }
    
}