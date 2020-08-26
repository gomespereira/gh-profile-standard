import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from 'pages/Home'
import About from 'pages/About'
import Profile from 'pages/Profile'

export default function Content() {
  return (
    <main className="flex flex-col flex-auto justify-center items-center mt-4 mr-4 mb-4 ml-4 md:mr-10 md:ml-10 space-y-10">
      <Switch>
        <Route path="/profile/:username">
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
