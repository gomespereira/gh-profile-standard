import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'

function Form() {
  const [username, setUsername] = useState("")
  let history = useHistory()

  function handleChange(event: any) {
    setUsername(event.target.value)
  }

  async function handleSubmit(event: any) {
    event.preventDefault()

    try {
      const { data } = await axios({
        url: `https://api.github.com/users/${username}`,
        method: 'get',
        headers: {
          'Accept': 'application/vnd.github.v3+json',
          'Authorization': process.env.REACT_APP_GITHUB_TOKEN
        }
      })

      history.push({ pathname: '/profile', state: data })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">github.com/</label>
      <input id="username" className="ml-1 pl-2 rounded outline-none focus:shadow-outline" type="text" placeholder={'Press "/" to focus'} onChange={handleChange}/>
    </form>
  )
}

export default Form
