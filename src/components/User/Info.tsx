import React from 'react'
import { useLocation } from 'react-router-dom'
import { format, parseISO } from 'date-fns'

export default function Info() {
  let location = useLocation<any>()
  const userData = location.state
  const formattedDate = format(parseISO(userData.created_at), 'MMMM dd, yyyy')

  return (
    <section className="flex flex-col items-center space-y-4">
      <picture>
        <img
          className="w-32 rounded-full"
          src={userData.avatar_url}
          alt="Avatar"
        />
      </picture>
      <div className="flex flex-col items-center">
        <span className="font-bold">{userData.name}</span>
        <a
          className="text-teal-700 hover:underline"
          href={userData.html_url}
          target="_blank"
          rel="noopener noreferrer"
        >
          @{userData.login}
        </a>
      </div>
      <div className="flex flex-col items-center">
        <span>{userData.location}</span>
        <span>Joined in {formattedDate}</span>
      </div>
      <div className="flex space-x-5">
        <div className="flex flex-col items-center">
          <span className="font-bold">{userData.public_repos}</span>
          <span>
            {
              userData.public_repos === 1
                ? "Repository"
                : "Repositories"
            }
          </span>
        </div>
        <div className="flex flex-col items-center">
          <span className="font-bold">{userData.followers}</span>
          <span>
            {
              userData.followers === 1
                ? "Follower"
                : "Followers"
            }
          </span>
        </div>
        <div className="flex flex-col items-center">
          <span className="font-bold">{userData.following}</span>
          <span>Following</span>
        </div>
      </div>
    </section>
  )
}
