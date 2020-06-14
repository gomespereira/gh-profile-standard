import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function Repos() {
  const [userRepos, setUserRepos] = useState<any[]>([])
  let location = useLocation<any>()
  const username = location.state.login

  useEffect(() => {
    async function fetchUserRepos() {
      try {
        const response = await fetch(`https://api.github.com/users/${username}/repos`, {
          method: 'GET',
          headers: {
            'Accept': 'application/vnd.github.v3+json',
            'Authorization': 'token e8f90277ace135d60e914776a3388ca2d28e2791'
          }
        })
        const data = await response.json()
        setUserRepos(data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchUserRepos()
  }, [username])

  return (
    <section>
      <div>Repositories</div>

      {userRepos.map((repo) => (
        <div key={repo.id}>
          <div>{repo.name}</div>
        </div>
      ))}
    </section>
  )
}

export default Repos
