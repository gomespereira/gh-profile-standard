import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import Header from './components/layout/Header'
import Content from './components/layout/Content'
import Footer from './components/layout/Footer'

export default function App() {
  return (
    <Router>
      <Header />
      <Content />
      <Footer />
    </Router>
  )
}
