import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

/* This is the global header for the app, including a title and menu reference. */
const Header = props => (
  <header id="header" className="alt">
    <Link to="/" className="logo">
      <strong>MovementX Health</strong>
    </Link>
    <nav>
      <a className="menu-link" onClick={props.onToggleMenu} href="javascript:;">
        Move
      </a>
    </nav>
  </header>
)

Header.propTypes = {
  onToggleMenu: PropTypes.func,
}

export default Header
