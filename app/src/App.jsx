import { useState } from 'react'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex justify-center items-center">
      <Navbar />
    </div>
  )
}

export default App
