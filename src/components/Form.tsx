import React, { useRef, useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

export default function Form() {
  const inputElement = useRef(null)
  const [username, setUsername] = useState('')
  let history = useHistory()

  useEffect(() => {
    document.onkeyup = handleKeyUp
  },[])

  function handleKeyUp(event: any): void {
    if (event.key === 191) inputElement.current.focus()
    if (event.key === 27) inputElement.current.blur()
  }

  function handleChange(event: any): void {
    setUsername(event.target.value)
  }

  function handleSubmit(event: any): void {
    event.preventDefault()
    history.push(`/profile/${username}`)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">github.com/</label>
      <input
        id="username"
        className="ml-1 pl-2 rounded outline-none focus:shadow-outline"
        type="text"
        placeholder={'Press "/" to focus'}
        ref={inputElement}
        onChange={handleChange}
      />
    </form>
  )
}
