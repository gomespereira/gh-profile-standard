import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from '../pages/Home'
import About from '../pages/About'
import Profile from '../pages/Profile'

function Content() {
  return (
    <main className="flex flex-col flex-auto justify-center items-center m-4">
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
