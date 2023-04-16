const express = require("express");
const pool = require("../config");

const router = express.Router();

router.get('/profile', async function (req, res, next) {
    try {

        const [member, memberFields] = await pool.query('SELECT * FROM members WHERE mem_id = 3')

        res.json({
            member: member[0],
        });

    } catch (error) {
        console.error(error);
        return next(error);
    }
});

exports.router = router;