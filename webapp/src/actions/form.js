export const handleInputChange = (event, form) => {
    form.setState({
        [event.target.name]: event.target.value
    })
}
export const handleSubmit = (form) => {
    const {username, password} = form.state
    const userArray = form.props.appState.users.filter(user => {
        return user.username === username && user.password === password
    })
    const currentUser = userArray[0]
    form.props.appState.currentUser = currentUser
   
    if (currentUser){
        // TONY I CHANGED THIS IN ORDER TO MAKE CURRENTUSER AN ACTUAL ID.
        form.props.appState.currID = getCurrentUserId(form, currentUser);
        // Set a session storage to store the current User ID 
        window.sessionStorage.setItem('currentUser', form.props.appState.currID)
        form.setState(
            {
                redirect: true
            }
        )
    }
    else {
        alert("Invalid Username or Password");
    }        
       
}

export const handleRegister = (form)=> {
    const {username, password, firstName, lastName, birthday} = form.state
   
    const newUser = {username: username,
                     password: password}
    form.state.appState.users.push(newUser)
    
}

// HARDCODED METHOD
// Requires server call to get the userId associated with the currentUser
const getCurrentUserId = (form, currentUser) => {
    if (currentUser === form.props.appState.users[0]) {
        console.log("returned AcawO")
        return "AcawO";
    }
    console.log("returned LuCaW")
    return "LuCaW";
};