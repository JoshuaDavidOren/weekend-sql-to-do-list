// connecting pool to router
const pool = require('./pool');
const express = require('express');
const listRouter = express.Router();

listRouter.get('/', (req, res) => {
    console.log('someone is trying to GET my list');

    let qText = 'SELECT * FROM "to_do";';

    pool.query(qText)
        .then(result => {
            res.send(result.rows);
        })
        .catch(err => {
            console.log('Error trying to GET list', err);
            res.sendStatus(500);
        });
});

module.exports = listRouter;