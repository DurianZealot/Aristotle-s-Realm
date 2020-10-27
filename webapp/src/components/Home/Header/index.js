import React from 'react'
import "./styles.css"
import { Typography, AppBar, Toolbar, IconButton, Button} from '@material-ui/core';
import {AccountCircle} from '@material-ui/icons'
class Header extends React.Component{
    render() {
        return(
            <div className='header flex'>
                <AppBar position="static">
                    <Toolbar>
                        <Button color="secondary" variant="contained">Browse Stories</Button>
                            
                        <Typography variant="h2" className='flex title' >
                            <img src={require('./static/logo.jpg')} alt="logo" className='image flex' >
                            </img>
                             TITLE TBA
                             <img src={require('./static/logo.jpg')} alt="logo" className='image flex' >
                            </img>
                        </Typography>
                        <IconButton edge="start" className='' color="inherit" aria-label="menu">
                            <AccountCircle />
                            <Typography variant="h6" className='flex'>
                                <span>LOGIN</span>
                            </Typography>
                        </IconButton>                       
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}
export default Header