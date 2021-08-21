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

// get data from db and send to admin page
router.get('/', (req, res) => {
    const sqlQuery = `SELECT * FROM "feedback" ORDER BY "id" DESC`;
    pool.query(sqlQuery)
        .then(dbRes => {
            res.send(dbRes.rows);
        })
        .catch(err => {
            res.sendStatus(500);
        });
});

// delete a feedback response from the admin page
router.delete('/:id', (req, res) => {
    pool.query(`DELETE FROM "feedback" WHERE "id"=$1`, [req.params.id])
        .then(dbRes => {
            res.sendStatus(200);
        })
        .catch(err => {
            res.sendStatus(500);
        });
});

// set flagged status of feedback 
router.put('/:id', (req, res) => {
    let flagged = req.body.flagged;
    console.log('router flagged?', flagged);
    if (flagged) {
        pool.query(`UPDATE "feedback" SET "flagged" = TRUE WHERE "id"=$1`, [req.params.id])
            .then(dbRes => {
                res.sendStatus(200);
            })
            .catch(err => {
                res.sendStatus(500);
            });
    } else {
        pool.query(`UPDATE "feedback" SET "flagged" = FALSE WHERE "id"=$1`, [req.params.id])
            .then(dbRes => {
                res.sendStatus(200);
            })
            .catch(err => {
                res.sendStatus(500);
            });
    }
});

module.exports = router;