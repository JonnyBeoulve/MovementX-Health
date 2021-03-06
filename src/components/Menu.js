import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

/* This is the menu, which is accessed by clicking Menu on the top right. */
const Menu = props => (
  <nav id="menu">
    <div className="inner">
      <ul className="links">
        <li>
          <Link onClick={props.onToggleMenu} to="/">
            Home
          </Link>
        </li>
        <li>
          <Link onClick={props.onToggleMenu} to="/articles">
            Articles
          </Link>
        </li>
      </ul>
      <ul className="actions vertical">
        <li>
          <a href="https://movement-x.com/" className="button special fit">
            Get Moving
          </a>
        </li>
      </ul>
    </div>
    <span className="close" onClick={props.onToggleMenu}>
      Close
    </span>
  </nav>
)

Menu.propTypes = {
  onToggleMenu: PropTypes.func,
}

export default Menu
