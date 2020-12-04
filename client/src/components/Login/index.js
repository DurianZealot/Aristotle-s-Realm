import React from "react";
import { Container } from "@material-ui/core";
import Form from "./Form";
import "./styles.css";
import {Link} from 'react-router-dom'
import {Button} from '@material-ui/core';

class Login extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='login__page'>
                <div className='login_wrapper'>
                    <div className='login_title_wrapper'>
                        <Link className="login_to_home_link" to={"/"}> {/* Takes User to Search/Browse */}
                            <Button color='inherit' className="button" variant="contained" size="large">
                                <span className='back_button_text'>
                                    Back
                                </span>
                            </Button>
                        </Link>
                        <div className='login_logo'></div>
                        <div className='login_title'>
                            Welcome Back
                        </div>
                        <div className='login_subtitle'>
                            Login to your account 
                        </div>
                    </div>
                    <Container className="login__form" maxWidth="xs">
                    <Form appState={this.props.appState}
                    />
                    </Container>
                </div>
                
                
            </div>
        )
    }
}

export default Login;