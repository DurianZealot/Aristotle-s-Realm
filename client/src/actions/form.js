import { FlashOffRounded } from "@material-ui/icons"

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

export const handleAdminSubmit = (form) => {
    const {username, password} = form.state
    const adminArray = form.props.appState.admins.filter(admin => {
        return admin.username === username && admin.password === password
    })
    const currentAdmin = adminArray[0]
    form.props.appState.currentUser = currentAdmin
   
    if (currentAdmin){
        // hardcoded admin ID
        form.props.appState.currID = 'admin'
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
    const {username, password} = form.state 
    const valid = validateEntries(form)
    if (valid){
        const newUser = {username: username,
        password: password}
        form.props.appState.users.push(newUser) //store in database in phase 2
        alert("Successfully Created Account")
        console.log(form.props.appState.users)
        form.setState(
            {redirect: true}
        )
    }   
}

const validateEntries = (form) =>{
    const {username, password, firstName, lastName} = form.state
    if (!username || !password || !firstName || !lastName ){
        alert("Please fill out all required infromation")
        return false
        
    }
    else{
        const userArray = form.props.appState.users.filter(user => {
            return user.username === username 
        })
        if(userArray[0]){
            alert("The username you have entered is not available")
            return false
           
        }
        return true
    }
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