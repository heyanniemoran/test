import  { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <nav className="header__navbar-main">
            <ul>
                <li>
                    <NavLink exact to="/">Activity</NavLink>
                </li>
                <li>
                    <NavLink to="/map">Map</NavLink>
                </li>
                <li>
                    <NavLink to="/timer">Time</NavLink>
                </li>
            </ul>
        </nav>
    )
}
export default Navbar;