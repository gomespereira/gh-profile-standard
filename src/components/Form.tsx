import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

function Form() {
  const [username, setUsername] = useState("")
  let history = useHistory()

  function handleChange(event: any) {
    setUsername(event.target.value)
  }

  async function handleSubmit(event: any) {
    event.preventDefault()
    try {
      const response = await fetch(`https://api.github.com/users/${username}`, {
        method: 'GET',
        headers: {
          'Accept': 'application/vnd.github.v3+json',
          'Authorization': 'token e8f90277ace135d60e914776a3388ca2d28e2791'
        }
      })
      const data = await response.json()

      history.push({ pathname: '/profile', state: data })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">github.com/</label>
      <input id="username" type="text" onChange={handleChange}/>
    </form>
  )
}

export default Form
