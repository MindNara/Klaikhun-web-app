import React from 'react'
import { Navbar, CheckOutButton, CheckOutInfo, CheckOutCard, CheckOutConfirm } from '../components'

const CheckOut = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className='my-24'>
      <CheckOutButton />
      <div className='flex justify-center'>
      <CheckOutInfo />
      <CheckOutCard />
      </div>
      <div>
        <CheckOutConfirm />
      </div>
      </div>
    </div>
  )
}

export default CheckOut