const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000; // Change this to your desired port

// Middleware to parse JSON requests
app.use(bodyParser.json());

// Handle POST requests with sensor data
app.post('/sensor-data', (req, res) => {
  const sensorData = req.body;
  // Process sensor data here
  console.log('Received sensor data:', sensorData);
  res.sendStatus(200);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
