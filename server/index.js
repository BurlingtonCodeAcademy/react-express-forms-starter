const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
const port = process.env.PORT || 5000;

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../client/build')));

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});

app.post('/contact', function (req, res, next) {
  console.log(req.body); // show the body in the console
  res.json(req.body); // return the body as JSOn in the response
});

app.listen(port);

console.log(`Server listening at http://localhost:${port}`);
