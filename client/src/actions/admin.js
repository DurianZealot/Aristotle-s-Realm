"use strict";
const log = console.log;

export const adminLogin = async function(username, password, form){
    // Create a new request with parameters we need
    const request = new Request ("/admin/login", {
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
            form.setState({currentUser: returnJson.currentUser})
            return true;
        }
    }
    else{
        return false;
    }
    
}