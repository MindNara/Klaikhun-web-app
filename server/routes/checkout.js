const express = require("express");
const pool = require("../config");

const router = express.Router();

router.post("/checkoutHotel", async (req, res) => {
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

router.post("/checkoutFlight", async (req, res) => {
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