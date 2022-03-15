import React from 'react';
import './SideNavBar.css';

const SideNavBar = () => {
  return(
    <nav id="sidebar">
        <ul className="list-unstyled components">
            <li> <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Dashboard</a>
                <ul className="collapse list-unstyled" id="homeSubmenu">
                    <li> <a href="#">Dashboard1</a> </li>
                    <li> <a href="#">Dashboard2</a> </li>
                    <li> <a href="#">Dashboard3</a> </li>
                </ul>
            </li>
            <li> <a href="#">Users</a> </li>
            <li> <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Subscribers</a>
                <ul className="collapse list-unstyled" id="pageSubmenu">
                    <li> <a href="#">Active</a> </li>
                    <li> <a href="#">Idle</a> </li>
                    <li> <a href="#">Non Active</a> </li>
                </ul>
            </li>
            <li> <a href="#">Timeline</a> </li>
            <li> <a href="#">Live Chat</a> </li>
            <li> <a href="#">Likes</a> </li>
            <li> <a href="#">Comments</a> </li>
        </ul>
    </nav>
  )
}

export default SideNavBar;