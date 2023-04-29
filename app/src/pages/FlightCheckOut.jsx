import { React, useState, useEffect } from 'react'
import { Navbar, CheckOutInfo, FlightCheckOutCard, CheckOutButton, PaymentInfo } from '../components'
import { statusContext } from '../components/status'
import axios from "axios";
import { useParams } from "react-router-dom";


function CheckOut() {
  const routeParams = useParams();
  const [flightData, setflightData] = useState([]);
  const [deals, setDeals] = useState([])
  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState(0);

  const getFlightData = () => {
    axios.get('http://localhost:3000/flightCheck/' + routeParams.flightId)
        .then((response) => {
            setflightData(response.data.flightData[0]);
            setDeals(response.data.deals);
            console.log(response.data.flightData[0]);
            console.log(response.data.deals)
    })
        .finally(() => {
            setLoading(false);  
    });
  }

  useEffect(() => {
      getFlightData();
  }, []);

  return (
    <statusContext.Provider value={[status, setStatus]}>
      <Navbar />
      <div className='my-24'>
        <CheckOutButton />
        <div className='flex justify-center'>
          {status === 0 && <CheckOutInfo />}
          {status === 1 && <PaymentInfo />}
          <FlightCheckOutCard flightData={ flightData } deals={ deals }/>
        </div>
      </div>
    </statusContext.Provider>
  )
}

export default CheckOut