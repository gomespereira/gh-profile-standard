import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import './App.css'

import Header from './layout/Header'
import Content from './layout/Content'
import Footer from './layout/Footer'

function App() {
  return (
    <Router>
      <Header />
      <Content />
      <Footer />
    </Router>
  )
}

export default App
