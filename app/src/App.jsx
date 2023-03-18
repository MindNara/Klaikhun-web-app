import { useState } from 'react'
import { Navbar , HotelSearch, FlightSearch } from './components'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar />
      <div className='flex-row relative mt-[400px]'>
        <HotelSearch />
        <FlightSearch />
      </div>
    </div>
  )
}

export default App
