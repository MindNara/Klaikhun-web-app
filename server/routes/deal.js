const express = require("express");
const pool = require("../config");

const router = express.Router();

router.get('/deals', async function (req, res, next) {
    try {

        const [deals, dealsFields] = await pool.query('SELECT * FROM promotions')

        res.json({
            deals: deals,
        });

    } catch (error) {
        console.error(error);
        return next(error);
    }
});

exports.router = router;