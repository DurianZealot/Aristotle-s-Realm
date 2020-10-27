import React from 'react'
import {Link} from 'react-router-dom'
import Body from './Body'
import Header from './Header'
import "./styles.css"

class Home extends React.Component{
    render() {
        return(
            <div className="homepage">
                <Header>

                </Header>
            
                <Body>

                </Body>
                <Link to={"./register"}>
                    <button> go to registration</button>
                </Link>
                
            </div>
        )
    }
}
export default Home