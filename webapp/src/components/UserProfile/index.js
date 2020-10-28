import React from 'react';
import SideBar from './../SideBar'
import "./styles.css"


class UserProfile extends React.Component{
    render() {
        const {isLoggedIn} = this.props // Check whether the user is logged in or not
        return (
            <div className="user-profile">
                <SideBar isLoggedIn={isLoggedIn}>
                
                </SideBar>
                <div className="user-profile__header">
                    <div className="user-profile__icon"> 
                        {/* Currently the css file HARDCODES a placeholder profile image */}
                    </div>
                    <div className="user-profile__info">
                        <h1 className="user-profile__info-username">
                            FirstName LastName
                            {/* Currently HARDCORDED a name */}
                        </h1>
                    </div>
                </div>    
            </div>
        )
    }
}

export default UserProfile