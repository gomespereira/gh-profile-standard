import React from 'react'
import { useLocation } from 'react-router-dom'

function Info() {
  let location = useLocation<any>()
  const userData = location.state

  return (
    <section>
      <div>{userData.name}</div>
    </section>
  )
}

export default Info
