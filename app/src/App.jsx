import { Route, Routes } from "react-router-dom";
import { Landing, Hotel, Flight, Deal, Profile, Signin, HotelDetail, CheckOut, Confirm } from './pages/index';
import Footer from './components/Footer'


function App() {

  return (
    <div>
      <div>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/hotels" element={<Hotel />} />
          <Route path="/hotels/:hotelId" element={<HotelDetail />} />
          <Route path="/flights" element={<Flight />} />
          <Route path="/deals" element={<Deal />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/check-out" element={<CheckOut />} />
          <Route path="/confirmed" element={<Confirm />} />
        </Routes>
      </div>
      <div className="flex justify-center items-center mt-10">
        <Footer />
      </div>
    </div>
  );
}

export default App;
