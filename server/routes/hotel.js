const express = require("express");
const pool = require("../config");

const router = express.Router();

router.get('/hotels', async function (req, res, next) {
    try {

        const [hotelsData, hotelsFields] = await pool.query("SELECT * FROM hotels");

        res.json({
            hotels: hotelsData,
        });

    } catch (error) {
        console.error(error);
        return next(error);
    }
});

exports.router = router;