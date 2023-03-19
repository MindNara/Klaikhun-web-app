import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Landing, Hotel, Flight } from './pages/index';
import Footer from './components/Footer'


function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/hotels" element={<Hotel />} />
          <Route path="/flights" element={<Flight />} />
        </Routes>
      </div>
      <div className="flex justify-center items-center mt-10">
        <Footer />
      </div>
    </div>
  );
}

export default App;
