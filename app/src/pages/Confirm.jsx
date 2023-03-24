import React from 'react'
import { Navbar, CheckOutConfirm } from '../components'

const confirm = () => {

  return (
    <div>
        <Navbar />
        <div className='my-24'>
            <div className='w-full flex justify-center items-center relative'>
                <div className='flex flex-row h-20 bg-black text-white w-full'>
                    <div className="text-center text-xl pt-6 w-1/3">Customer Information</div>
                    <div className="text-center text-xl pt-6 w-1/3">Payment Information</div>
                    <div className="bg-white text-black text-center text-xl pt-6 w-1/3">Booking is Confirmed</div>
                </div>
            </div>
        </div>
        <CheckOutConfirm />
    </div>
  )
}

export default confirm