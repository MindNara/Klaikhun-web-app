const express = require("express");
const pool = require("../config");

const router = express.Router();

router.get('/hotels', async function (req, res) {
    //filter from query string
    var min_price = req.query.minP || 0
    var max_price = req.query.maxP || 99999
    var star5 = req.query.five === 'true' || false
    var star4 = req.query.four  === 'true' || false
    var star3 = req.query.three  === 'true' || false
    var star2 = req.query.two  === 'true' || false
    var star1 = req.query.one  === 'true' || false
    var nostar = req.query.no  === 'true' || false
    var haveStar = false
    var rating = req.query.rating || '0'
    var cm = req.query.cm === 'true' || false
    var cb = req.query.cb === 'true' || false
    var ky = req.query.ky === 'true' || false
    var pb = req.query.pb === 'true' || false
    var class_filter = ''
    var hotel_filter = ''
    var provice_list = []

    if (star5 | star4 | star3 | star2 | star1 | nostar){
        haveStar = true
        if (star5){
            class_filter += "5,"
        }
        if (star4){
            class_filter += "4,"
        }
        if (star3) {
            class_filter += "3,"
        }
        if (star2) {
            class_filter += "2,"
        }
        if (star1) {
            class_filter += "1,"
        }
        if (nostar) {
            class_filter += "0,"
        }
        class_filter = class_filter.slice(0, -1)
    }

    if (cm | cb | ky | pb){
        hotel_filter = 'AND ('
        if (cm) {
            provice_list.push("hotel_location LIKE '%Chiang Mai%' OR hotel_location LIKE '%เชียงใหม่%'")
        }
        if (cb) {
            provice_list.push("hotel_location LIKE '%Chon Buri%' OR hotel_location LIKE '%ชลบุรี%' OR hotel_location LIKE '%พัทยา%'")
        }
        if (ky) {
            provice_list.push("hotel_location LIKE '%Khao Yai%' OR hotel_location LIKE '%เขาใหญ่%'")
        }
        if (pb) {
            provice_list.push("hotel_location LIKE '%Prachin Buri%' OR hotel_location LIKE '%ปราจีนบุรี%'")
        }
        for (let i=0; i<provice_list.length; i++){
            hotel_filter += provice_list[i]
            if (i+1 != provice_list.length){
                hotel_filter += " OR "
            }
            else {
                hotel_filter += ')'
            }
        }
    }

    try {

        const [hotels, hotelsFields] = await pool.query(
            `SELECT * FROM hotels WHERE review_score > ? AND room_price >= ? AND room_price <= ?
            ${haveStar ? `AND hotel_class IN (${class_filter})`: ""}
            ${provice_list.length != 0 ? hotel_filter: ""}`, 
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