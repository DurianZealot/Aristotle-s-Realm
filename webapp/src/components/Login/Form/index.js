import React from "react";
import { Typography, Button, Grid, TextField } from "@material-ui/core";
import "../styles.css";
import {Redirect} from 'react-router-dom'
import {handleInputChange, handleSubmit} from '../../../actions/form.js'
class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            redirect: false,
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
                        onChange={(event) => handleInputChange(event, this)}    
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
                        onChange={(event) => handleInputChange(event, this)}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12}>
                    <Button
                        name="login"
                        color="primary"
                        variant="contained"
                        onClick={() => handleSubmit(this)}
                        fullWidth>
                        User Login
                    </Button>
                </Grid>
                <Grid item xs={12}>
                    <Button
                        name="loginAdmin"
                        variant="contained"
                        onClick={() => handleSubmit(this)}
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