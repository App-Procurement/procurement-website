import React from 'react'
import { Link } from 'gatsby'

import logo from '../img/footer-logo.png';

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="d-flex flex-nowrap justify-content-center text-center py-5 w-100 footer">
        <ul className="nav">
          <li className="nav-item">
            <span className="d-inline-block">©</span> <Link to="/"><img src={logo} alt="Synectiks logo" /></Link>
          </li>
          <li className="nav-item">
            <Link to="/">All rights reserved</Link>
          </li>
          <li className="nav-item">
            <Link to="/">Privacy Ploicy</Link>
          </li>
        </ul>
      </footer>
    )
  }
}

export default Footer
