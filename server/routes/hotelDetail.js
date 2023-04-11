const express = require("express");
const pool = require("../config");

const router = express.Router();

router.get('/hotels/:hotelId', async function (req, res, next) {
    try {

        const [hotelDetail, hotelFields] = await pool.query("SELECT * FROM hotels WHERE hotel_id = ?",
            [req.params.hotelId]);

        res.json({
            hotelDetail: hotelDetail,
        });

    } catch (error) {
        console.error(error);
        return next(error);
    }
});

exports.router = router;