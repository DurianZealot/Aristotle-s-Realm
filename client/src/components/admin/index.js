import React from "react";
import "./styles.css";
import {Link} from 'react-router-dom'
import {Button} from '@material-ui/core';
class Admin extends React.Component {
    constructor(props) {
        // When the component is created
        super(props);
        this.state = {
        };
    }

    render() {

        return (
            <div className='admin_page'>
            
                <div className='admin_title_container'> 
                    <Link className="admin_logout-link" to={"/"} onClick={() => {this.props.appState.currID = null; this.props.appState.currentUser = null; window.sessionStorage.clear()}}> {/* Log User Out */}
                        <Button className="button" color='primary' variant="contained" size="large">Logout</Button>
                    </Link>
                    <span className='admin_title_text'>
                        ADMIN DASHBOARD
                    </span>
                </div>    
                <div className='stories_container'> 
                    <span className='admin_stories_text'>
                        All Users
                    </span>
                </div> 
                <div className='users_container'> 
                    <span className='admin_users_text'>
                        All Stories
                    </span>
                </div> 
                <div className='reports_container'> 
                    <span className='admin_reports_text'>
                        All Reports
                    </span>
                </div> 
            </div>
        );
    }
}

export default Admin;
