import React from "react";
import RegisterForm from "./RegisterForm";
import {Link} from 'react-router-dom'
import "./styles.css";
import { Container, Button } from "@material-ui/core";
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
            <div className='register__page'>
                <div className='register_wrapper'>
                    <div className='register_title_wrapper'>
                        <Link className='register_to_home_link' to={"/"}> {/* Takes User to Search/Browse */}
                            <Button color='inherit' className="button" variant="contained" size="large">
                                <span className='back_button_text'>
                                    Back
                                </span>
                            </Button>
                        </Link>
                        <div className='register_logo'></div>
                        <div className='register_title'>
                            Welcome
                        </div>
                        <div className='register_subtitle'>
                        Create Your Account 
                        </div>
                    </div>
                    <Container className='register__form' maxWidth="xs">
                        <RegisterForm appState={this.props.appState}
                            firstName={this.state.firstName}
                            lastName={this.state.lastName}
                            username={this.state.username}
                            password={this.state.password}
                            birthday={this.state.birthday}
                            handleInputChange={(event) => handleInputChange(event, this)}
                            handleRegister={() => handleRegister(this)}
                            appState={this.props.appState}
                        />
                    </Container>
                </div>
                
                
            </div>
        );
    }
}

export default Registration;
