import { useState } from 'react'
import Navbar from './components/Navbar'
import { Outlet } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <div className="flex justify-center items-center">
        <Navbar />
      </div>
      <div>
        <Outlet />
      </div>
    </div>
   
  )
}

export default App
