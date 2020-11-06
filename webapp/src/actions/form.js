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