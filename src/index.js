const express = require('express');
const app = express();

const { config } = require("./config")
const { mongoConfig, PORT } = config

const cors = require('cors');
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

const mongoose = require('mongoose');
mongoose.connect(mongoConfig.uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true, useFindAndModify: false });
const connection = mongoose.connection;
connection.once("open", () => {
    console.log("MongoDB database connection established successfully");
});

app.use('/api',  require('./routes/row'))

const port = PORT || 5000;
app.listen(port, () => {
    console.log(`task table app listening to port : ${port}`)
});