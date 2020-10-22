import React from 'react'
import {Link} from 'react-router-dom'

class Home extends React.Component{
    render() {
        return(
            <div>
                <h1>
                    Welcome to the Home page
                </h1>
                <Link to={"./register"}>
                    <button> go to registration</button>
                </Link>
            </div>
        )
    }
}
export default Home