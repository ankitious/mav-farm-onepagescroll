import React from 'react';
import Scrollspy from 'react-scrollspy'

const Navbar = () => (
    <nav className="nav">
        <Scrollspy
            items={ ['section-1', 'section-2', 'section-3', 'section-4'] }
            currentClassName="nav__item--active"
            className="nav__inner"
            style={{
                fontWeight: 300
            }}
            offset={ -50 }
        >
            <li className="nav__item"><a href="#section-1" className="nav__link">Introduction</a></li>
            <li className="nav__item"><a href="#section-2" className="nav__link">About</a></li>
            <li className="nav__item"><a href="#section-3" className="nav__link">Project</a></li>
            <li className="nav__item"><a href="#section-4" className="nav__link">Contact</a></li>
        </Scrollspy>
    </nav>);

export default Navbar;
