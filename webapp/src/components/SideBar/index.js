import React from 'react';
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import "./side_bar_styles.css"

class SideBar extends React.Component {
    render() {
        const {isLoggedIn} = this.props
        
        if (isLoggedIn) {
            // User Sidebar
            return (
                <div className="side-bar">
                    <Link className="side-bar__home-link" to={"/"}> {/* Takes User to Homepage */}
                        <Button className="side-bar__home-button side-bar__button"></Button>
                    </Link>
                
                    <Link className="side-bar__browse-link" to={"/browse"}> {/* Takes User to Browse */}
                        <Button className="side-bar__button" variant="contained" size="large" color="primary">Browse</Button>
                    </Link>
    
                    <Link className="side-bar__create-stories-link" to={"/profile/user/create-stories"}> {/* Takes User to Browse */}
                        <Button className="side-bar__button" variant="contained" size="large" color="primary">Create Stories</Button>
                    </Link>
    
                    <Link className="side-bar__my-stories-link" to={"/profile/user/my-stories"}> {/* Takes User to My Stories */}
                        <Button className="side-bar__button" variant="contained" size="large" color="primary">My Stories</Button>
                    </Link>
    
                    <Link className="side-bar__my-proposals-link" to={"/profile/user/my-proposals"} isActive="false"> {/* Takes User to My Proposals */}
                        <Button className="side-bar__button" variant="contained" size="large" color="primary">My Proposals</Button>
                    </Link>

                    <Link className="side-bar__profile-link" to={"/profile/user"}> {/* Takes User to My Proposals */}
                        <Button className="side-bar__button" variant="contained" size="large" color="primary">Profile</Button>
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
                
                <Link className="side-bar__browse-link" to={"/browse"}> {/* Takes User to Browse */}
                    <Button className="side-bar__button" variant="contained" size="large" color="primary">Browse</Button>
                </Link>

                <Link className="side-bar__register-link" to={"/register"}> {/* Takes User to My Proposals */}
                        <Button className="side-bar__button" variant="contained" size="large" color="primary">Register</Button>
                </Link>
            </div>
        )
    }
}

export default SideBar