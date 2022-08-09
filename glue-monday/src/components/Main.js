import React, { Component } from 'react'

import './App.css'

export default class Main extends Component {
  render() {
    return (
        <div className='main-container'>
          <div className='username'><i class="fa-solid fa-arrow-left"></i>Username</div>
          <img className='cover-pic' src='' alt=''></img>
          <img className='profile-pic' src={this.props.profilePicture} alt=''></img>
          <div className='profile'>
            <h4>Storm O'Bryant(they/them)</h4>
            <ul>
              <li>*windows xp power off sound* Orchestrator of my own life</li>
              <li>crochet hottie</li>
              <li>code crew memphis</li>
            </ul>
          </div>
          <p>Click 
          <a href='https://github.com/NunuMarie3000' target='_blank' rel="noreferrer">here</a> to view Stormy's Github profile!
          </p>
          <audio controls>
            <source src={this.props.audioSource}></source>
            Your browser does not support the audio tag.
          </audio>
        </div>
    )
  }
}
