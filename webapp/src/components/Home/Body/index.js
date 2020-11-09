import React from 'react'
import './styles.css'
import {Link} from 'react-router-dom'
import {Button} from '@material-ui/core';
class Body extends React.Component{
    
    render() {
        const currentUser = window.sessionStorage.getItem('currentUser')
        // if (this.props.appState.currentUser){
        if (currentUser){
            return(
                <div className='body'>
                    <div className = 'Introduction_wrapper'>
                        <span className='intro_text'>
                            
                        </span>
                    </div>
                    
                    <div className = 'animatedtext_wrapper'>
                        <span className='animated_text'>
                        </span>
                    </div>
                    <div className='body_wrapper'>
                        <div className='left_body_wrapper'>
                            
                            <Link className="home_browse-link" to={"/search"}> {/* Takes User to Search/Browse */}
                                <Button color='primary' className="button" variant="contained" size="large">Browse</Button>
                            </Link>
                
                            <Link className="home_create-stories-link" to={`/profile/user=${currentUser}/create-stories`}> {/* Takes User to Create Stories Page */}
                                <Button className="button" color='primary'  variant="contained" size="large">Create Stories</Button>
                            </Link>
                
                            <Link className="home_my-stories-link" to={`/profile/user=${currentUser}/my-stories`}> {/* Takes User to My Stories */}
                                <Button className="button" color='primary'  variant="contained" size="large">My Stories</Button>
                            </Link>
                
                            <Link className="home_my-proposals-link" to={`/profile/user=${currentUser}/my-proposals`}> {/* Takes User to My Proposals */}
                                <Button className="button" color='primary'  variant="contained" size="large">My Proposals</Button>
                            </Link>

                            <Link className="home_create-proposal-link" to={`/profile/user=${currentUser}/create-proposal`}> {/* Take User to Create Proposal Page*/}
                                <Button className="button"  color='primary' variant="contained" size="large">Create Proposal</Button>
                            </Link>

                            <Link className="home_profile-link" to={`/profile/user=${currentUser}`}> {/* Takes User to Profile Page */}
                                <Button className="button" color='primary'  variant="contained" size="large">Profile</Button>
                            </Link>

                            <Link className="home_logout-link" to={"/"} onClick={() => {this.props.appState.currID = null; this.props.appState.currentUser = null; window.sessionStorage.clear()}}> {/* Log User Out */}
                                <Button className="button" color='primary' variant="contained" size="large">Logout</Button>
                            </Link>
                        </div>
                        <div className='right_body_wrapper'>
                            <div className="foreground">
                            </div>                       
                        </div>
                       
                        
                    </div>
                    
                    
                   
                </div>
            )
        }
        return(
            <div className='body'>
                <div className = 'Introduction_wrapper'>
                    <span className='intro_text'>
                        
                    </span>
                </div>
                
                <div className = 'animatedtext_wrapper'>
                    <span className='animated_text'>
                    </span>
                </div>
                <div className='body_wrapper'>
                    <div className='left_body_wrapper'>
                        <div className='register_intro_text'>
                            <div className='getting_started_text'> Getting Started </div>
                            <span className='getting_started_body_text'>
                                Welcome to Aristotle's Realm. <br>
                                </br>
                                As an unregistered user you will be able to read stories posted by writers in our community.
                                <br>
                                </br>
                                <br></br>
                                Of course, reading stories is only a small part of what we provide. Our main goal is to
                                create a community of writers that share ideas to produce amazing collaborative content.
                                <br>
                                </br>
                                <br>
                                </br>
                                Register below to write your own creative stories as well as collaborate with other users.
                            </span>
                        </div>
                        <Link className ="register_link" to={"./register"}> { /*link to registration page*/}
                            <Button className='button'>
                                <h1 className="register_text"> Create An Account</h1>
                            
                            </Button>
                        </Link>

                        <div className='wrapper'>
                            Have an Account? 
                        </div>
                            
                        <Link className='login_link'  to={"./login"}> { /*link to login page*/}
                            <Button className="button" >
                                <h1 className="register_text"> log In</h1>                          
                            </Button>
                        </Link>
                    </div>
                    <div className='right_body_wrapper'>
                        <div className="foreground">
                        </div>                       
                    </div>
                   
                    
                </div>
                
                
               
            </div>
        )
    }
}
export default Body