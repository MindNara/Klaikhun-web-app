import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from './pages/landing.jsx'
import Layout from './pages/Layout.jsx';
import Hotel from './pages/Hotel.jsx';
import Flight from './pages/Flight';
import NoPage from './pages/Nopage.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Landing />} />
          <Route path="hotel" element={<Hotel />} />
          <Route path="flight" element={<Flight />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
