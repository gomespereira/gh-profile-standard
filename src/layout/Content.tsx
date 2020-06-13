import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from '../pages/Home'
import About from '../pages/About'
import Profile from '../pages/Profile'

function Content() {
  return (
    <main>
      <Switch>
        <Route path="/profile">
          <Profile />
        </Route>

        <Route path="/about">
          <About />
        </Route>

        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </main>
  )
}

export default Content
