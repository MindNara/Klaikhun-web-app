const express = require("express");
const pool = require("../config");

const router = express.Router();

router.get('/hotels', async function (req, res) {
    //filter from query string
    var min_price = req.query.minP || 0
    var max_price = req.query.maxP || 99999
    var star5 = req.query.five ||  ''
    var star4 = req.query.four || ''
    var star3 = req.query.three || ''
    var star2 = req.query.two || ''
    var star1 = req.query.one || ''
    var nostar = req.query.no || ''
    var rating = req.query.rating || '0'
    var location = req.query.location || ''

    try {

        const [hotels, hotelsFields] = await pool.query(
            "SELECT * FROM hotels WHERE review_score > ? AND room_price >= ? AND room_price <= ?", 
        [rating, min_price, max_price]);

        res.json({
            hotels: hotels,
        });

    } catch (error) {
        console.error(error);
        return next(error);
    }
});

exports.router = router;