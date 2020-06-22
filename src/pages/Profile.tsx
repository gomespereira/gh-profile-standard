import React, { Fragment } from 'react'

import Info from '../components/profile/Info'
import Repos from '../components/profile/Repos'

export default function Profile() {
  return (
    <Fragment>
      <Info />
      <Repos />
    </Fragment>
  )
}
