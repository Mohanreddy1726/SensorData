// const express = require('express');
// const mongoose = require('mongoose');
// const ejs = require('ejs');
// const bodyParser = require('body-parser');

// const app = express();

// app.set('view engine', 'ejs');
// app.use(bodyParser.urlencoded({
//     extended: true
// }));
// app.use(bodyParser.json());

// mongoose.connect("mongodb+srv://mohananika123:Anika123@cluster0.kqje6p6.mongodb.net/Sensordb");
// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function () {
//     console.log('Connected to MongoDB');
// });

// const sensorDataSchema = {
//     sensorName: String,
//     Data: Number,
//     timestamp: { type: Date, default: Date.now }
// }
// const sensordata = mongoose.model('sensordata', sensorDataSchema);
// app.post('/', function (req, res) {
//     let newData = new sensordata ({
//         sensorName: req.body.sensorName,
//         data: req.body.data
//     });
//     newData.save();
//     res.redirect('/');
// });

// app.get('/', function (req, res) {
//     res.render('index');
// });
// app.listen(3004, function () {
//     console.log('listening on port 3004');
// });


// Import necessary libraries
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// Create an instance of Express.js

const app = express();
const port = process.env.PORT || 3000;
app.set('view engine', 'ejs');
// Connect to your MongoDB database
mongoose.connect('mongodb://localhost/sensorData', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Define a schema for your sensor data
const sensorDataSchema = new mongoose.Schema({
    sensorName: String,
    data: Number,
    timestamp: {
        type: Date,
        default: Date.now
    }
});

// Create a model for sensor data
const SensorData = mongoose.model('SensorData', sensorDataSchema);

// Middleware for parsing JSON data
app.use(bodyParser.json());

// Define an endpoint for receiving sensor data from NodeMCU
app.post('/data', (req, res) => {
    // Extract data from the request body
    const {
        sensorName,
        data
    } = req.body;
    console.log(data);
    // Create a new sensor data entry
    const newData = new SensorData({
        sensorName,
        data
    });

    // Save the data to MongoDB
    newData.save();
    
});

app.get('/', function (req, res) {
         res.render('index');
     });

// Start the Express server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});