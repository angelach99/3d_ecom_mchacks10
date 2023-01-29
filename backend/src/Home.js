import React from "react"
import {useLocation,useNavigate} from 'react-router-dom';

function Home(){
    const location=useLocation()

    return(
        <div className="Home">

            <h1>Hi~ {location.state.id}, nice to meet you! </h1>
        </div>
    )
}
export default Home