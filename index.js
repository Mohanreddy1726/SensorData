
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000; // Adjust the port as needed
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));

// Endpoint to handle incoming data
app.post('/data', (req, res) => {
    // Retrieve data from the POST request
    const { httpRequestData } = req.body;

    // Store or process the data as needed
    // For example, you can log it to the console
    console.log(`Sensor Name: ${sensorName}, Data: ${data}`);

    // Respond with a success message or any other required response
    res.send('Data received successfully!');
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