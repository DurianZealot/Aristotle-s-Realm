import React from 'react'
import './styles.css'
import {Link} from 'react-router-dom'
class Body extends React.Component{
    render() {
        return(
            <div className='body'>
                
                <Link to={"./register"}>
                    <button> go to registration</button>
                </Link>
            </div>
        )
    }
}
export default Body