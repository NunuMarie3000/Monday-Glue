import React, { Component } from 'react'

import './App.css'

export default class Main extends Component {
  render() {
    return (
        <div className='main-container'>
          <div className='main-top'>
            <div className='username'><a href='#'><i class="fa-solid fa-arrow-left"></i></a> @Stormy_TwitterName</div>
            <img className='cover-pic' src={this.props.coverPicture} alt=''></img>
          </div>
          <div className='main-mid'>
            <div className='follow-container'>
              <img className='profile-pic' src={this.props.profilePicture} alt=''></img>
              <a href='#' className='follow'>Follow <i class="fa-solid fa-plus"></i></a>
            </div>
              <div className='profile'>
                <h4>Storm O'Bryant</h4>
                <h5 className='handle'>@Stormy_TwitterName</h5>
                  <p>You can call me Stormy(they/them). Orchestrator of my own life. Crochet hottie.&#129526; #CodeCrewMemphis <br></br><br></br>Check out my <a className='no-line' href='https://github.com/NunuMarie3000' target='_blank' rel="noreferrer">Github</a> profile! <i class="fa-solid fa-code"></i></p>
              </div>
              <div className='twitter-navbar'>
                <a className='no-line' href='#'>Tweets</a>
                <a className='no-line' href='#'>Tweets and Replies</a>
                <a className='no-line' href='#'>Multimedia</a>
                <a className='no-line' href='#'>Likes</a>
              </div>
          </div>
          <div className='main-bottom'>
            <p className='pinned-tweet'><i class="fa-solid fa-thumbtack"></i> Pinned Tweet</p>
            <div className='music-tweet'>
              <div><img className='tweet-pic' src={this.props.profilePicture} alt=''></img>
              </div>
              <div className='tweet-main'>
                <div className='tweet-info'>
                  <h4>Storm O'Bryant</h4>
                  <h5>@Stormy_TwitterName</h5>
                </div>
                <h5 className='tweet-content'>I just found this song on an old vinyl I have, Eartha Kitt is a Goddess!!! Check it out!</h5>
                <audio controls>
                  <source src={this.props.audioSource}></source>Your browser does not support the audio tag.
                </audio>
                <div className='funsies'>
                <i class="fa-solid fa-message"></i> 123
                <i class="fa-solid fa-retweet"></i> 345
                <i class="fa-solid fa-heart"></i> 732
                <i class="fa-solid fa-arrow-up-from-bracket"></i>
                <i class="fa-solid fa-signal"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
  }
}
