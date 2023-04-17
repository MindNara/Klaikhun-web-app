const express = require("express");
const pool = require("../config");

const router = express.Router();

router.get('/profile', async function (req, res, next) {
    try {

        const [member, memberFields] = await pool.query('SELECT * FROM members WHERE mem_id = 3')
        const [checkOutHotel, checkOutHotelFields] = await pool.query('SELECT hotel_id, hotel_name, hotel_class, hotel_description, hotel_location, room_price, review_score, hotel_image1 FROM hotels JOIN booking_hotels USING (hotel_id) JOIN members USING (mem_id) WHERE mem_id = 3;');
        const [checkOutFlight, checkOutFlightFields] = await pool.query('SELECT ticket_id, flight_beginning, flight_destination, time_departure, time_arriving, airline_name, airline_logo, ticket_price FROM flights JOIN airlines USING (airline_id) JOIN tickets USING (flight_id) JOIN booking_flights USING (ticket_id) JOIN members USING (mem_id) WHERE mem_id = 3;');

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

router.delete('/profile', async function (req, res, next) {

    const bookHotelId = req.query.hotel_id;
    const bookTicketId = req.query.ticket_id;

    const conn = await pool.getConnection()
    await conn.beginTransaction();

    try {

        if (bookHotelId) {
            console.log('Delete Booking Hotel!!!');
            await conn.query('DELETE FROM booking_hotels WHERE hotel_id = ?;', [bookHotelId]);
            await conn.commit();
            res.send(true);
        } else if (bookTicketId) {
            console.log('Delete Booking Flight!!!');
            await conn.query('DELETE FROM booking_flights WHERE ticket_id = ?;', [bookTicketId]);
            await conn.commit();
            res.send(true);
        }

    } catch (error) {
        await conn.rollback();
        next(error);
    }

});

exports.router = router;