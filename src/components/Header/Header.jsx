import {Link} from 'react-router-dom'
import './Header.css'
const Header = () => {
  return (
    <div>
        <header>
            <nav>
              
                <div>
                
                
                  
                
                <p align="right">
                <Link to="/home">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/courses">Courses</Link>
                <Link to="/contact">Contact</Link>
                
                
                <a href="/admissions" align="right"><button>Apply Now!</button></a>
                </p>
                </div>
                
                
                
            </nav>
        </header>
    </div>
  )
}
export default Header;