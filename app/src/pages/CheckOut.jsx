import { React, useState } from 'react'
import { Navbar, CheckOutInfo, HotelCheckOutCard, FlightCheckOutCard, CheckOutButton } from '../components'
import { statusContext } from '../components/status'


function CheckOut() {
  const [status, setStatus] = useState(0)
  const items = 'hotel'

  return (
    <statusContext.Provider value={[status, setStatus]}>
      <Navbar />
      <div className='my-24'>
        <CheckOutButton />
        <div className='flex justify-center'>
          {status === 0 && <CheckOutInfo />}
          {status === 1 && "Payment"}
          {items === "hotel" && <HotelCheckOutCard />}
          {items === "flight" && <FlightCheckOutCard />}
        </div>
      </div>
    </statusContext.Provider>
  )
}

export default CheckOut