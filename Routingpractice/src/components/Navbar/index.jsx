import {Link} from 'react-router-dom'
import './index.css'
const  Navbar =() =>{
    return(
        <div className = "header">
          <img src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png" 
          alt='wave' className=' about-header'></img>
        <nav>
          <ul>
            <li>
            <Link to="/">Home</Link>
            </li>
            <li>
            <Link to="/about">About</Link>
            </li>
            <li>
            <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        </div>
    )
}
export default Navbar