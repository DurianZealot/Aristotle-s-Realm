import React from "react";
import { Typography, Button, Grid, TextField } from "@material-ui/core";
import "../styles.css";
import {Redirect} from 'react-router-dom'

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            redirect: false,
        }
    }
    handleInputChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    handleSubmit = () => {
        const {username, password} = this.state
        const userArray = this.props.appState.users.filter(user => {
            return user.username === username && user.password === password
        })
        const currentUser = userArray[0]
        this.props.appState.currentUser = currentUser
        if (currentUser){
            this.setState(
                {
                    redirect: true
                }
            )
        }
        else {
            document.getElementById('errorText').appendChild(document.createTextNode('Incorrect Username or Password'))
        }        
           
    }
    render() {
        const {
            username,
            password,
            redirect,
        } = this.state;
        if (redirect){
            return(
                <Redirect to={{pathname: '/profile/user'}}/>
            )
        }
        return (

            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <TextField
                        name="username"
                        variant="outlined"
                        label="Username"
                        value={username}
                        onChange={this.handleInputChange}    
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        name="password"
                        variant="outlined"
                        label="Password"
                        type="password"
                        value={password}
                        onChange={this.handleInputChange}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12}>
                    <Button
                        name="login"
                        color="primary"
                        variant="contained"
                        onClick={this.handleSubmit}
                        fullWidth>
                        User Login
                    </Button>
                </Grid>
                <Grid item xs={12}>
                    <Button
                        name="loginAdmin"
                        variant="contained"
                        onClick={this.handleSubmit}
                        fullWidth
                    >
                        ADMIN Login
                    </Button>
                </Grid>

              
                <Grid item xs={12}>
                    <Typography color="error" id='errorText' variant="subtitle2" align="center">
                    </Typography>
                </Grid>
            </Grid>
        );
    }
}

export default Form;