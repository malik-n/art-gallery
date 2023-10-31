import "./Navbar.css"
import {Link} from "react-router-dom"
function Navbar () {
    return (
        <>
        <nav>
      <h3>Art Gallery</h3>
      <ul>
        <li><Link to = "/">Home</Link></li>
        <li><Link to = "/artists">Artists</Link></li>
        <li><Link to = "/facts">Facts</Link></li>
      </ul>
    </nav>
    
        </>
    )
}

export default Navbar;