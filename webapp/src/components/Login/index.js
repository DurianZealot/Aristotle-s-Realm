import React from "react";
import { Typography, Container } from "@material-ui/core";
import Form from "./Form";
import "./styles.css";

class Login extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='login__page'>
                <Typography className="login__title" variant="h2" align="center">
                    Login to Aristotle's Realm
                </Typography>
                <Container className="login__form" maxWidth="xs">
                    <Form appState={this.props.appState}
                        
                    />
                </Container>
            </div>
        )
    }
}

export default Login;