const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const userRouter = require("./routes/user");



const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');


app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(userRouter);

app.get('/', (req, res) => {
  res.send("The juice is still flowing, the engine is still running.");
});

module.exports = app;
