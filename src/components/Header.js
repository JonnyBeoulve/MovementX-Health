import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import mxlogo from '../assets/images/mxlogo.png'

/* This is the global header for the app, including a title and menu reference. */
const Header = (props) => (
    <header id="header" className="alt">
        <img className="header-logo" src={mxlogo} alt="MovementX logo" />
        <Link to="/" className="logo"><strong>MovementX</strong> <span>Health</span></Link>
        <nav>
            <span className="menu-link" onClick={props.onToggleMenu}>Menu</span>
        </nav>
    </header>
)

Header.propTypes = {
    onToggleMenu: PropTypes.func
}

export default Header
