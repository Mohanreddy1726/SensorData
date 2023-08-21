
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const ejs = require('ejs');
const app = express();
const port = 3000; // Adjust the port as needed
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));

mongoose.connect("mongodb+srv://mohananika123:Anika123@cluster0.kqje6p6.mongodb.net/Employeedb");
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log('Connected to MongoDB');
});
const SensorDataSchema = {
    httpRequestData: String
}
const sensordata = mongoose.model('sensordata', SensorDataSchema);
// Endpoint to handle incoming data
app.post('/data', (req, res) => {
    // Retrieve data from the POST request
    const { httpRequestData } = req.body;
    let newData = new sensordata ({
        httpRequestData
    });
newData.save();
    // Store or process the data as needed
    // For example, you can log it to the console
    console.log(`Sensor Name: ${sensorName}, Data: ${data}`);

    // Respond with a success message or any other required response
    res.send('<script>alert("Data sent for verification!"); window.location.href = "/";</script>');
});

app.get('/', function (req, res) {
    res.render('index')
});
app.get('/data', function (req, res) {
    res.render('data')
});
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});