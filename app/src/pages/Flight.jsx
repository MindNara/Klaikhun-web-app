import React from 'react'
import { FlightSearch } from '../components/index'

const Flight = () => {
  return (
    <>
    <div className="flex justify-center items-center">
        <Navbar />
      </div>
    <div className='flex mt-[20em]'>
        <FlightSearch />
    </div>
    </>
    
  )
}

export default Flight