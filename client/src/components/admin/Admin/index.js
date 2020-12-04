import React from "react";
import "./styles.css";
import {Link} from 'react-router-dom'
import {Button} from '@material-ui/core';
import {adminLogout} from '../../../actions/admin'


import AdminSidebar from '../AdminSidebar'
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
                <AdminSidebar></AdminSidebar>
                <div className='admin_title_container'> 
                    <Link className="admin_logout-link" to={"/"} onClick={() => adminLogout()}> 
                        <Button className="button" color='primary' variant="contained" size="large">Logout</Button>
                    </Link>
                    <span className='admin_title_text'>
                        ADMIN DASHBOARD (MODERATE USERS)
                    </span>
                </div>    
                
            </div>
        );
    }
}

export default Admin;
