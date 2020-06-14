import React, { Fragment } from 'react'

import Info from '../components/User/Info'
import Repos from '../components/User/Repos'

function Profile() {
  return (
    <Fragment>
      <Info />
      <Repos />
    </Fragment>
  )
}

export default Profile
