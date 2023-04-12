const express = require("express");
const pool = require("../config");

const router = express.Router();

router.get('/', async function (req, res, next) {
    try {

        const [deals, dealsFields] = await pool.query('SELECT * FROM promotions')
        const [hotels, hotelsFields] = await pool.query('SELECT * FROM hotels WHERE hotel_class = 5');

        res.json({
            deals: deals,
            hotels: hotels,
        });

    } catch (error) {
        console.error(error);
        return next(error);
    }
});

exports.router = router;