import React from 'react'
import { Navbar, CheckOutButton, CheckOutInfo } from '../components'

const CheckOut = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className='my-24'>
      <CheckOutButton />
      <CheckOutInfo />
      </div>
    </div>
  )
}

export default CheckOut