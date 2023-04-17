const express = require("express");
const pool = require("../config");

const router = express.Router();

router.get('/flights', async function (req, res, next) {
    var min_price = req.query.minP || 0
    var max_price = req.query.maxP || 99999
    var bkkAir = req.query.bkkAir === 'true' || false
    var nokAir = req.query.nokAir === 'true' || false
    var airAsia = req.query.airAsia === 'true' || false
    var thSmile = req.query.thSmile === 'true' || false
    var airlineList = []
    var isAirlineFilter = false

    if (bkkAir | nokAir | airAsia | thSmile) {
        isAirlineFilter = true
        if (bkkAir){
            airlineList.push('บางกอกแอร์เวย์ส')
        }
        if (nokAir){
            airlineList.push('นกแอร์')
        }
        if (airAsia){
            airlineList.push('แอร์เอเชีย')
        }
        if (thSmile){
            airlineList.push('ไทย สไมล์')
        }
        airlineList = JSON.stringify(airlineList).replace('[','(').replace(']', ')')
    }

    try {

        const [flights, flightsFields] = await pool.query(
            `SELECT * FROM flights INNER JOIN airlines ON flights.airline_id = airlines.airline_id INNER JOIN tickets ON flights.flight_id = tickets.flight_id
            WHERE ticket_price >= ? AND ticket_price <= ? ${isAirlineFilter ? `AND airline_name IN ${airlineList}` : ""}`
            ,[min_price, max_price]);

        res.json({
            flights: flights,
        });

    } catch (error) {
        console.error(error);
        return next(error);
    }
});

exports.router = router;