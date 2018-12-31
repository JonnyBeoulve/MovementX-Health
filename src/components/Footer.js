import React from 'react'

/* The global footer for the app with social media links. */
const Footer = props => (
    <footer id="footer">
        <div className="inner">
            <ul className="icons">
                <li><a href="https://www.instagram.com/movementxinc/" className="icon alt fa-instagram"><span className="label">Instagram</span></a></li>
                <li><a href="https://www.linkedin.com/company/movementx/" className="icon alt fa-linkedin"><span className="label">LinkedIn</span></a></li>
            </ul>
            <ul className="copyright">
                <li>&copy; MovementX 2019</li>
            </ul>
        </div>
    </footer>
)

export default Footer
