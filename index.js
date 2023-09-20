const express = require('express');
const app = express();
const port = 3000;

app.get('/data', (req, res) => {
  const sensorValue = req.query.value;
  console.log(`Received sensor data: ${sensorValue}`);
  // Process the sensor data as needed

  res.sendStatus(200); // Send a response back to the Arduino
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
