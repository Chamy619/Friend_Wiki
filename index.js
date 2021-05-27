const express = require('express');
const app = express();
const port = 5000;

// Post 데이터를 받기 위한 body-parser
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// MongoDB 연동
const mongoose = require('mongoose');
const config = require('./config/key.js');
mongoose.connect(config.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
}).then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

app.use('/', (req,res) => {
    res.send('hello world');
});

app.listen(port, () => {console.log(`Listening on port ${port}`)});