const express = require("express");
const pool = require("../config");

const router = express.Router();

router.get('/flights', async function (req, res, next) {
    try {

        const [flights, flightsFields] = await pool.query("SELECT * FROM flights INNER JOIN airlines ON flights.airline_id = airlines.airline_id INNER JOIN tickets ON flights.flight_id = tickets.flight_id");

        res.json({
            flights: flights,
        });

    } catch (error) {
        console.error(error);
        return next(error);
    }
});

exports.router = router;