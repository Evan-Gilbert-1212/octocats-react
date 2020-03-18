import React, { Component } from 'react'
import github_mark from '../Images/GitHub-Mark.png'

export class Header extends Component {
  render() {
    return (
      <header>
        <img
          src={github_mark}
          style={({ width: 30 + 'px' }, { height: 30 + 'px' })}
          alt="GitHub Logo"
        />
        <h1>Octodex</h1>
        <ul class="nav-links">
          <li>Home</li>
          <li>FAQ</li>
        </ul>
        <ul class="social-links">
          <li>Follow us on Twitter</li>
          <li>Back to GitHub.com</li>
        </ul>
      </header>
    )
  }
}

export default Header
