import React from 'react'
import { useLocation } from 'react-router-dom'
import { useQuery } from 'react-query'
import { format, parseISO } from 'date-fns'

import { fetchData } from '../../utils/utils'

export default function Info() {
  let location = useLocation<any>()
  const username = location.state
  const { data } = useQuery(`https://api.github.com/users/${username}`, fetchData)

  if (!data) return <div>Loading...</div>

  const formattedDate = format(parseISO(data.created_at), 'MMMM dd, yyyy')

  return (
    <section className="flex flex-col items-center space-y-4">
      <picture>
        <img
          className="w-32 rounded-full"
          src={data.avatar_url}
          alt="Avatar"
        />
      </picture>
      <div className="flex flex-col items-center">
        <span className="font-bold">{data.name}</span>
        <a
          className="text-teal-700 hover:underline"
          href={data.html_url}
          target="_blank"
          rel="noopener noreferrer"
        >
          @{data.login}
        </a>
      </div>
      <div className="flex flex-col items-center">
        <span>{data.location}</span>
        <span>Joined in {formattedDate}</span>
      </div>
      <div className="flex space-x-5">
        <div className="flex flex-col items-center">
          <span className="font-bold">{data.public_repos}</span>
          <span>
            {
              data.public_repos === 1
                ? "Repository"
                : "Repositories"
            }
          </span>
        </div>
        <div className="flex flex-col items-center">
          <span className="font-bold">{data.followers}</span>
          <span>
            {
              data.followers === 1
                ? "Follower"
                : "Followers"
            }
          </span>
        </div>
        <div className="flex flex-col items-center">
          <span className="font-bold">{data.following}</span>
          <span>Following</span>
        </div>
      </div>
    </section>
  )
}
