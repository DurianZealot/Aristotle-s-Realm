import React from 'react'
//import {Link} from 'react-router-dom'
import Body from './Body'
import Header from './Header'
import "./styles.css"
class Home extends React.Component{
    constructor(props) {
        super(props)
        this.state ={
            currentUser : window.sessionStorage.getItem('currentUser')
        }
    }
    render() {
        
        if (this.state.currentUser){
            return(
                <div className="homepage">
                        <Header className='header' appState={this.props.appState} >                       
                        </Header>
                        <Body className='body' appState={this.props.appState}>
                            
                        </Body>                
                </div>
            )
        }
        
        return(
            <div className="homepage">
                <Header className='header' appState={this.props.appState} >
                </Header>
                <Body className='body'  appState={this.props.appState}>   
                </Body>                
            </div>
        )
        
    }
}
export default Home