import React, { Fragment } from 'react'

import Info from '../components/user/Info'
import Repos from '../components/user/Repos'

export default function Profile() {
  return (
    <Fragment>
      <Info />
      <Repos />
    </Fragment>
  )
}
