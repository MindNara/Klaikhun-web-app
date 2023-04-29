const express = require("express");
const pool = require("../config");

const router = express.Router();

router.get("/flightCheck/:flightId", async (req, res, next) => {
    try {

        const [flightData, flightfield] = await pool.query('SELECT flight_id, flight_beginning, flight_destination, ticket_price FROM flights JOIN tickets USING (flight_id) WHERE flight_id = ?' 
        , [req.params.flightId]);
        const [deals, dealsFields] = await pool.query('SELECT * FROM promotions');

        res.json({
            flightData: flightData,
            deals: deals,
        });

    } catch (error) {

        console.error(error);
        return next(error);

    }
});

router.post("/hotelCheck", async (req, res) => {
    const {hotelId, guestAmount, roomAmount, checkInDate, checkOutDate } = req.body
    const membetId = 3

    try {
        const [rows, field] = await pool.query('INSERT INTO booking_hotels VALUE (curdate(), curtime(), ?, ?, ?, ?, ?, ?)'
        , [guestAmount, roomAmount, checkInDate, checkOutDate, hotelId, membetId])

        res.status(200).send("checkoutSuccess")
    }catch(err){
        console.log(err)
    }
})

router.post("/flightCheck", async (req, res) => {
    const { ticketId } = req.body
    const membetId = 3

    try {
        const [rows, field] = await pool.query('INSERT INTO booking_flights (booking_flight_date, booking_flight_time ,ticket_id ,mem_id) VALUE (curdate(), curtime(), ?, ?)'
        , [ticketId, membetId])

        res.status(200).send("checkoutSuccess")
    }catch(err){
        console.log(err)
    }
})

exports.router = router