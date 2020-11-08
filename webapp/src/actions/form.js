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
    // TONY I CHANGED THIS IN ORDER TO MAKE CURRENTUSER AN ACTUAL ID.
    form.props.appState.currID = getCurrentUserId(currentUser);
    if (currentUser){
        form.setState(
            {
                redirect: true
            }
        )
    }
    else {
        document.getElementById('errorText').appendChild(document.createTextNode('Incorrect Username or Password'))
    }        
       
}

export const handleRegister = (form )=> {
    
}

// HARDCODED METHOD
// Requires server call to get the userId associated with the currentUser
const getCurrentUserId = (currentUser) => {
    return "AcawO";
};