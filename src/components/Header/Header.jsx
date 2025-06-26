import {Link} from 'react-router-dom'
import './Header.css'
const Header = () => {
  return (
    <div>
        <header>
            <nav>
              
                <div>
                
                
                  
                
                <h2>
                <p align="right">
                <Link to="/home">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/courses">Courses</Link>
                <Link to="/contact">Contact</Link>
               
                
                <a href="/admissions" align="right"><button>Apply Now!</button></a>
                </p>
                 </h2>
                </div>
                
                
                
            </nav>
        </header>
    </div>
  )
}
export default Header;