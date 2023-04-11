const express = require("express");
const pool = require("../config");

const router = express.Router();

router.get('/hotels', async function (req, res, next) {
    try {

        const [hotels, hotelsFields] = await pool.query("SELECT * FROM hotels");

        res.json({
            hotels: hotels,
        });

    } catch (error) {
        console.error(error);
        return next(error);
    }
});

exports.router = router;