const express = require('express');
const router = require('./router');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('server/public'));
// for the routes
app.use('/toDo', router);

const PORT = 5000;
app.listen(5000, () => {
    console.log('I\'m the port I\'m the port I\'m the port I\'m the port, I am the port', PORT);
});