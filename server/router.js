// connecting pool to router
const pool = require('./pool');
const express = require('express');
const listRouter = express.Router();

listRouter.get('/', (req, res) => {
    console.log('someone is trying to GET my list');

    let qText = 'SELECT * FROM "to_do" ORDER BY "id" ASC;';

    pool.query(qText)
        .then(result => {
            res.send(result.rows);
        })
        .catch(err => {
            console.log('Error trying to GET list', err);
            res.sendStatus(500);
        });
});

listRouter.post('/', (req, res) => {
    const listItem = req.body;
    console.log('what', req.body);

    const qText = `
    INSERT INTO "to_do" ("task", "complete")
    VALUES ($1, $2);
    `;

    pool.query(qText, [
            listItem.task,
            listItem.complete,
        ])
        .then((dbresponse) => {
            res.sendStatus(201);
        })
        .catch((err) => {
            console.log('task is to hard go away', err);
            res.sendStatus(500);
        })
});

listRouter.put('/:id', (req, res) => {
    const rowId = req.params.id;

    const qText = `
    UPDATE "to_do" SET "complete" = true 
    WHERE id = $1;
    `;

    pool.query(qText, [rowId])
        .then(dbResponse => {
            console.log('You completed a task!!!', dbResponse.rowCount);
            res.sendStatus(202);
        })
        .catch(err => {
            console.log('are you sure your task is complete?', err);
            res.sendStatus(500);
        });
});

listRouter.delete('/:id', (req, res) => {
    const listId = req.params.id;

    const qText = `DELETE FROM  "to_do" WHERE ID = $1;
    `;

    pool.query(qText, [listId])
        .then(dbResponse => {
            console.log('Deleted task from to_do');
            res.sendStatus(201);
        })
        .catch(err => {
            console.log('can not delete your task', err);
            res.sendStatus(500);
        });
});

module.exports = listRouter;