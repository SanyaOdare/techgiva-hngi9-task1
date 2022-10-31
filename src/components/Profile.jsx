import React from 'react'
import { avatar } from '../utils/constants'
import { data } from '../utils/constants'

function Profile() {
  return (
    <div>
      <img src={avatar} alt='' />
      <h1 className='h1'>{data.name}</h1>
    </div>
  )
}

export default Profile;
