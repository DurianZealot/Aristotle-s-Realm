import React from 'react'
//import {Link} from 'react-router-dom'
import Body from './Body'
import Header from './Header'
import "./styles.css"
class Home extends React.Component{
    constructor(props) {
        super(props)
        this.state ={
            currentUser : props.appState.currentUser
        }
    }
    render() {
        
        if (!this.state.currentUser){
            return(
                <div className="homepage">
                    <Header className='header'>
    
                    </Header>
                    <Body className='body'>
    
                    </Body>                
                </div>
            )
        }
        return(
            <div className="homepage">
                Logged in version of this page under construction              
            </div>
        )
        
    }
}
export default Home