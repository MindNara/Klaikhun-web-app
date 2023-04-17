const express = require("express");
const pool = require("../config");

const router = express.Router();

router.get('/profile', async function (req, res, next) {
    try {

        const [member, memberFields] = await pool.query('SELECT * FROM members WHERE mem_id = 3')
        const [checkOutHotel, checkOutHotelFields] = await pool.query('SELECT hotel_id, hotel_name, hotel_class, hotel_description, hotel_location, room_price, review_score, hotel_image1 FROM hotels JOIN booking_hotels USING (hotel_id) JOIN members USING (mem_id) WHERE mem_id = 3;');
        const [checkOutFlight, checkOutFlightFields] = await pool.query('SELECT flight_id, flight_beginning, flight_destination, time_departure, time_arriving, airline_name, airline_logo, ticket_price FROM flights JOIN airlines USING (airline_id) JOIN tickets USING (flight_id) JOIN booking_flights USING (ticket_id) JOIN members USING (mem_id) WHERE mem_id = 3;');

        res.json({
            member: member[0],
            checkOutHotel: checkOutHotel,
            checkOutFlight: checkOutFlight,
        });

    } catch (error) {
        console.error(error);
        return next(error);
    }
});

exports.router = router;