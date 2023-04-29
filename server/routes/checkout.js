const express = require("express");
const pool = require("../config");

const router = express.Router();

router.get("/hotelCheck/:hotelId", async (req, res) => {

    try {

        const [hotelCheck, hotelCheckFields] = await pool.query("SELECT booking_check_in_date, booking_hotel_time, booking_guest_amount, booking_room_amount, booking_check_in_date, booking_check_out_date, room_price FROM booking_hotels JOIN hotels USING (hotel_id) WHERE hotel_id = ?",
            [req.params.hotelId]);

        res.json({
            hotelCheck: hotelCheck,
        });

    } catch (err) {
        console.log(err)
    }
})

router.post("/hotels/:hotelId", async (req, res) => {
    const guestAmount = req.body.guest;
    const roomAmount = req.body.room;
    const checkInDate = req.body.checkIn;
    const checkOutDate = req.body.checkOut;
    const membetId = 3

    try {
        const [rows, field] = await pool.query('INSERT INTO booking_hotels(booking_hotel_date, booking_hotel_time, booking_guest_amount, booking_room_amount, booking_check_in_date, booking_check_out_date, hotel_id, mem_id) VALUE (curdate(), curtime(), ?, ?, ?, ?, ?, ?)'
            , [guestAmount, roomAmount, checkInDate, checkOutDate, req.params.hotelId, membetId])

        res.status(200).send("checkoutSuccess")
    } catch (err) {
        console.log(err)
    }
})

router.post("/checkoutFlight", async (req, res) => {
    const { ticketId } = req.body
    const membetId = 3

    try {
        const [rows, field] = await pool.query('INSERT INTO booking_flights (booking_flight_date, booking_flight_time ,ticket_id ,mem_id) VALUE (curdate(), curtime(), ?, ?)'
            , [ticketId, membetId])

        res.status(200).send("checkoutSuccess")
    } catch (err) {
        console.log(err)
    }
})

exports.router = router;