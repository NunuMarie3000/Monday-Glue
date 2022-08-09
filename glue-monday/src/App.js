import React, { Component } from 'react'

import Header from './components/Header'

import Main from './components/Main'

import profilePic from './media/flowerpic.jpg'

import audio from './media/paint-me-black-angels.mp3'

import Footer from './components/Footer'

export default class App extends Component {
  render() {
    return (
      <>
        <div className='app-container'>
          {/* <h1>Storm O'Bryant</h1> */}
        <Header/>
        <Main profilePicture={profilePic} audioSource={audio}/>
        {/* <Footer/> */}
        </div>
      </>
    )
  }
}

