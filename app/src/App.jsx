import { Route, Routes } from "react-router-dom";
import { Landing, Hotel, Flight, Deal, Profile, Signin } from './pages/index';
import Footer from './components/Footer'


function App() {

  return (
    <div>
      <div>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/hotels" element={<Hotel />} />
          <Route path="/flights" element={<Flight />} />
          <Route path="/deals" element={<Deal />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Signin" element={<Signin />} />
        </Routes>
      </div>
      <div className="flex justify-center items-center mt-10">
        <Footer />
      </div>
    </div>
  );
}

export default App;
