const express = require('express');
const listRouter = require('./router');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('server/public'));
// for the routes
//app.use('/to_do', listRouter)

const PORT = 5000;
app.listen(PORT, () => {
    console.log('I\'m the port I\'m the port I\'m the port I\'m the port, I am the port', PORT);
});