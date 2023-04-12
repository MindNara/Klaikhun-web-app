const express = require("express");
const pool = require("../config");

const router = express.Router();

router.get('/hotels', async function (req, res, next) {
    var min_price = req.query.minP || 0
    var max_price = req.query.maxP || 99999
    var star5 = req.query.five ||  ''
    var star4 = req.query.four || ''
    var star3 = req.query.three || ''
    var star2 = req.query.two || ''
    var star1 = req.query.one || ''
    var nostar = req.query.no || ''
    var guest = req.query.guest || ''
    var location = req.query.location || ''
    console.log(location)

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