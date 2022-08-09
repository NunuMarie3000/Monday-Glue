import React, { Component } from 'react'

import './App.css'

export default class Header extends Component {
  render() {
    return (
      <header className='nav-container'>
        <nav className='header-styles'>
          <a><i class="fa-solid fa-bolt"></i></a>
          <a className='link' href='#'><i class="fa-solid fa-house"></i> Home</a>
          <a className='link' href='#'><i class="fa-solid fa-address-card"></i> About Me</a>
          <a className='link' href='#'><i class="fa-solid fa-diagram-project"></i> Projects</a>
        </nav>
      </header>
    )
  }
}
