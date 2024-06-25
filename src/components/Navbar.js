import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <nav>
            <div className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/my-page">My Page</Link>
                <Link to="/share">Share</Link>
                <Link to="/inbox">Inbox</Link>
                <Link to="/profile">Profile</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;