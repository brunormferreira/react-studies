import './App.css'
import React from 'react'

import Logo from '../components/template/Logo'
import Nav from '../components/template/Nav'
import Main from '../components/template/Main'
import Footer from '../components/template/Footer'

export default props =>
  <div className="app">
    <Logo />
    <Nav />
    <Main />
    <Footer />
  </div>
