import React from 'react';
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import "./styles.css"
class AdminSidebar extends React.Component {

    render() {
        return (
            <div className="admin_sidebar">
                <Link className="admin_users_link" to={"/admin/users"}> {/* Takes admin to users */}
                    <Button className="admin_sidebar_button " variant="contained" size="large">Moderate Users</Button>
                </Link>
                
                <Link className="admin_stories_link" to={"/admin/stories"}> {/* Takes admin to stories */}
                    <Button className="admin_sidebar_button" variant="contained" size="large">Moderate Stories</Button>
                </Link>

                {/* <Link className="admin_reports_link" to={"/admin/reports"}> {/* Takes admin to reports */}
                        {/* <Button className="admin_sidebar_button" variant="contained" size="large">Moderate Reports</Button>
                </Link> */} 
            </div>
        )
    }
}

export default AdminSidebar