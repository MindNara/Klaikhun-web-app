import { useState } from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from "react-router-dom";
import { Landing, Hotel, Flight } from './pages/index';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <div className="flex justify-center items-center">
        <Navbar />
      </div>
      <div>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/hotels' element={<Hotel />} />
          <Route path='/flights' element={<Flight />} />
        </Routes>
      </div>
    </div>
   
  )
}

export default App

