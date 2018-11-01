const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('01ev GET endpoint.'));
app.post('/', (req, res) => res.send('01ev POST endpoint.'));

app.listen(port, () => console.log(`App initialized on port ${port}.`));