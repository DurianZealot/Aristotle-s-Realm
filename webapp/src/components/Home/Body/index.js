import React from 'react'
import './styles.css'
import {Link} from 'react-router-dom'
import { Typography, AppBar, Toolbar, IconButton, Button} from '@material-ui/core';
class Body extends React.Component{
    
    render() {
        return(
            <div className='body'>
                <div className = 'Introduction_wrapper'>
                    <span className='intro_text'>
                        
                    </span>
                </div>
                <div className="foreground">
                </div>
                <div className = 'animatedtext_wrapper'>
                    <span className='animated_text'>
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
        )
    }
}
export default Body