import React from "react";
import RegisterForm from "./RegisterForm";

import "./styles.css";
import { Container, Typography, Slide, Box } from "@material-ui/core";
import { handleInputChange, handleRegister } from "../../actions/form.js";

/* Component for register page */
class Registration extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {
        firstName: "",
        lastName: "",
        username: "",
        password: "",
        birthday: null,
        slideIn: true,
        slideDirection: "right",
        redirect: false
    };

    render() {
        return (
            <Slide direction={this.state.slideDirection} in={this.state.slideIn} mountOnEnter unmountOnExit>
                <Box>
                    <Box className="register_header">
                        <Typography variant="h2" align="center">
                            Setting Up Your Account
                        </Typography>
                    </Box>
                    <Container className="register-form" maxWidth="xs">
                        <RegisterForm
                            firstName={this.state.firstName}
                            lastName={this.state.lastName}
                            username={this.state.username}
                            password={this.state.password}
                            birthday={this.state.birthday}
                            handleInputChange={(event) => handleInputChange(event, this)}
                            handleRegister={() => handleRegister(this)}
                        />
                    </Container>
                </Box>
            </Slide>
        );
    }
}

export default Registration;
