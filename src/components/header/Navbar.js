import styled from "styled-components";
import { NavLinkIcon } from "../Generic";

const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-flow: row;
`;
const NavListLi = styled.li`
  padding: 12.5px 0;
`;

export default function Navbar() {
    return (
        <nav className="header__navbar-main">
            <NavList>
                <NavListLi>
                    <NavLinkIcon main="exact" icon="bar" title="Activity" url="/"></NavLinkIcon>
                </NavListLi>
                <NavListLi>
                    <NavLinkIcon main="" icon="map" title="Map" url="/map"></NavLinkIcon>
                </NavListLi>
                <NavListLi>
                    <NavLinkIcon main="" icon="time" title="Time" url="/timer"></NavLinkIcon>
                </NavListLi>
            </NavList>
        </nav>
    )
}