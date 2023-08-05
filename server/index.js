const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const port = 3001;

app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/pathpally', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).catch(error => console.error('Connection error:', error));



const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});

const itinerarySchema = new mongoose.Schema({
    destination: String,
    dates: String,
    activities: String,
});

const Itinerary = mongoose.model('Itenerary', itinerarySchema);

app.get('/', (req, res) => {
    res.send('PathPally backend!');
});

// CRUD endpoints
app.get('/itinerary', async (req, res) => {
    try {
        const itineraries = await Itinerary.find();
        res.status(200).json(itineraries);
    } catch (err) {
        res.status(500).send(err);
    }
});



app.post('/itinerary', (req, res) => {
    const itinerary = new Itinerary(req.body);
    itinerary.save((err) => {
        if (err) return res.status(500).send(err);
        res.status(200).send('Itinerary created successfully');
    });
});


app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});