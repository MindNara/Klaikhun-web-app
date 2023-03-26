import { React, useState } from 'react'
import { Navbar, CheckOutInfo, HotelCheckOutCard, CheckOutButton, PaymentInfo } from '../components'
import { statusContext } from '../components/status'


function HotelCheckOut() {
  const [status, setStatus] = useState(0)

  return (
    <statusContext.Provider value={[status, setStatus]}>
      <Navbar />
      <div className='my-24'>
        <CheckOutButton />
        <div className='flex justify-center'>
          {status === 0 && <CheckOutInfo />}
          {status === 1 && <PaymentInfo />}
          <HotelCheckOutCard />
        </div>
      </div>
    </statusContext.Provider>
  )
}

export default HotelCheckOut