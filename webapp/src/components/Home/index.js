import React from 'react'
//import {Link} from 'react-router-dom'
import Body from './Body'
import Header from './Header'
import "./styles.css"
import Sidebar from './../SideBar'
class Home extends React.Component{
    render() {
        return(
            <div className="homepage">
                <Header>

                </Header>
                <Body>

                </Body>                
            </div>
        )
    }
}
export default Home