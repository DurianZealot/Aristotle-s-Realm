import React from 'react'
import "./styles.css"
import {Link} from 'react-router-dom'
import { Typography, IconButton, Button} from '@material-ui/core';
import {AccountCircle} from '@material-ui/icons'
class Header extends React.Component{
    render() {
        return(
            <div className='header flex '>
                 <Link className="browse_link flex" to={"/search"}> {/* Takes User to Homepage */}
                    <Button color="secondary" className="button flex" variant="contained">Browse Stories</Button>
                 </Link>   
                 <img src={require('./static/logo.jpg')} alt="logo" className='image flex' >
                </img>  
                <div className='title flex'> 
                    <Typography variant="h2" className='title_text flex' >
                        Aristotle's Realm
                    </Typography>
                </div>           
               
                <img src={require('./static/logo.jpg')} alt="logo" className='image_two flex' >
                </img>
                <Link className ="login_link2 " to={"./login"}>
                    <IconButton edge="start" className='button flex '  aria-label="menu">
                                
                        <AccountCircle className='white'/>
                        <Typography variant="h6" className=''>
                            <span className='white'>LOGIN</span>
                        </Typography>

                    </IconButton>      
                </Link>
                         
            </div>
        )
    }
}
export default Header