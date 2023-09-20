const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

mongoose.connect("mongodb+srv://AnikaSterilis:Anika123@cluster0.foyqb0v.mongodb.net/Sensordb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log('Connected to MongoDB');
});

const sensorSchema = {
  sensorValue: String,
}
const sensor = mongoose.model('sensor', sensorSchema);
app.get('/data', (req, res) => {
  let newData = ({
    sensorValue: req.query.value,
  // console.log(`Received sensor data: ${sensorValue}`);
  })  ;
  newData.sensorValue();
  // Process the sensor data as needed

  res.sendStatus(200); // Send a response back to the Arduino
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
