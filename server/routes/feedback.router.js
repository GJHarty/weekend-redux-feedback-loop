const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// post results of a feedback survey to the db
// Doing an async db request is a little overboard here 
// since we are only posting to a single table,
// but it was good practice
router.post('/', async (req, res) => {
    const client = await pool.connect();

    try {
        const {
            feeling,
            understanding,
            support,
            comments,
        } = req.body;
        await client.query('BEGIN');
        await client.query(`INSERT INTO "feedback"
                                ("feeling", "understanding", "support", "comments")
                            VALUES 
                                ($1, $2, $3, $4)
                            RETURNING id;`,
                            [feeling, understanding, support, comments]);
        await client.query('COMMIT');
        res.sendStatus(201);
    } catch (err) {
        await client.query('ROLLBACK')
        console.error('Error POST /api/order', err);
        res.sendStatus(500);
    } finally {
        client.release();
    };
});

module.exports = router;