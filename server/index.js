const express = require('express');
const app = express();
const port = 3001;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('PathPally backend!');
});

app.get('/itinerary', (req, res) => {
    res.json({ message: 'Itinerary endpoint' });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});