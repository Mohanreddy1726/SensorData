const express = require('express');
const mongoose = require('mongoose');
const ejs = require('ejs');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
    extended: true
}));

mongoose.connect("mongodb+srv://mohananika123:Anika123@cluster0.kqje6p6.mongodb.net/Sensordb");
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log('Connected to MongoDB');
});

const sensorDataSchema = {
    sensorvalue: String
}
const sensordata = mongoose.model('sensordata', sensorDataSchema);
app.post('/', function (req, res) {
    let newData = new sensordata ({
        sensorvalue: req.body.sensorvalue,
    });
    newData.save();
    res.redirect('/');
});

app.get('/', function (req, res) {
    res.render('index');
});
app.listen(3004, function () {
    console.log('listening on port 3004');
});

