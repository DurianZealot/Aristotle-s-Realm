import React from 'react'
//import {Link} from 'react-router-dom'
import Body from './Body'
import Header from './Header'
import "./styles.css"
class Home extends React.Component{
    constructor(props) {
        super(props)
        this.state ={
            loggedIn : props.appState.loggedIn
        }
    }
    render() {
        
        if (this.state.loggedIn === false){
            return(
                <div className="homepage">
                    <Header>
    
                    </Header>
                    <Body>
    
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