import React from 'react';
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import "./side_bar_styles.css"

class SideBar extends React.Component {

    constructor(props) {
        // When the component is created
        super(props);
        this.state = {
          user: {},
          userId: "",
        };
    }

    /*
    componentDidMount() {
        // When the component enters the DOM
        this.setState({
            user: this.props.user,
            userId: this.props.userId,
            isLoggedIn: this.props.isLoggedIn
        });
    } 
    */

    componentDidMount() {
        // When the component enters the DOM
        console.log("Current user ID: " + this.props.appState.currID)
    }

    render() {
        console.log(window.localStorage.currentUser)
        if (this.props.appState.currentUser !== null | window.sessionStorage.getItem('currentUser') != null) {
            // User Sidebar
            return (
                <div className="side-bar">
                    <Link className="side-bar__home-link" to={"/"}> {/* Takes User to Homepage */}
                        <Button className="side-bar__home-button side-bar__button"></Button>
                    </Link>
                
                    <Link className="side-bar__browse-link" to={"/search"}> {/* Takes User to Search/Browse */}
                        <Button className="side-bar__button" variant="contained" size="large">Browse</Button>
                    </Link>
    
                    <Link className="side-bar__create-stories-link" to={`/profile/user=${window.sessionStorage.getItem('currentUser')}/create-stories`}> {/* Takes User to Create Stories Page */}
                        <Button className="side-bar__button" variant="contained" size="large">Create Story</Button>
                    </Link>
    
                    <Link className="side-bar__my-stories-link" to={`/profile/user=${window.sessionStorage.getItem('currentUser')}/my-stories`}> {/* Takes User to My Stories */}
                        <Button className="side-bar__button" variant="contained" size="large">My Stories</Button>
                    </Link>
    
                    <Link className="side-bar__my-proposals-link" to={`/profile/user=${window.sessionStorage.getItem('currentUser')}/my-proposals`}> {/* Takes User to My Proposals */}
                        <Button className="side-bar__button" variant="contained" size="large">My Proposals</Button>
                    </Link>

                    <Link className="side-bar_create-proposal-link" to={`/profile/user=${window.sessionStorage.getItem('currentUser')}/create-proposal`}> {/* Take User to Create Proposal Page*/}
                        <Button className="side-bar__button" variant="contained" size="large">Create Proposal</Button>
                    </Link>

                    <Link className="side-bar__profile-link" to={`/profile/user=${window.sessionStorage.getItem('currentUser')}`}> {/* Takes User to Profile Page */}
                        <Button className="side-bar__button" variant="contained" size="large">Profile</Button>
                    </Link>

                    <Link className="side-bar__logout-link" to={"/"} onClick={() => {this.props.appState.currID = null; this.props.appState.currentUser = null; window.sessionStorage.clear()}}> {/* Log User Out */}
                        <Button className="side-bar__button" variant="contained" size="large">Logout</Button>
                    </Link>
                </div>
            )
        }
        // Guest Sidebar
        return (
            <div className="side-bar">
                <Link className="side-bar__home-link" to={"/"}> {/* Takes User to Homepage */}
                    <Button className="side-bar__home-button side-bar__button"></Button>
                </Link>
                
                <Link className="side-bar__browse-link" to={"/search"}> {/* Takes User to Browse */}
                    <Button className="side-bar__button" variant="contained" size="large">Browse</Button>
                </Link>

                <Link className="side-bar__register-link" to={"/register"}> {/* Takes User to My Proposals */}
                        <Button className="side-bar__button" variant="contained" size="large">Register</Button>
                </Link>
            </div>
        )
    }
}

export default SideBar