import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

export default function Form() {
  const [username, setUsername] = useState('')
  let history = useHistory()

  function handleChange(event: any) {
    setUsername(event.target.value)
  }

  async function handleSubmit(event: any) {
    event.preventDefault()
    history.push({
      pathname: '/profile',
      state: username
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">github.com/</label>
      <input
        id="username"
        className="ml-1 pl-2 rounded outline-none focus:shadow-outline"
        type="text"
        placeholder={'Press "/" to focus'}
        onChange={handleChange}
      />
    </form>
  )
}
