const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const data = require('./data')
const port = process.env.PORT || 3000
const path = require('path')

app.use(bodyParser.json())

app.get('/', connected)
app.get('/data', sayHello)
app.post('/data', addData)

app.listen(port, () => {
  console.log(`Friday Warm Up API on ${port}!!!!!!!`);
})











function connected () {
  res.send('you are connected');
}

function sayHello (req, res) {
  res.send('Hello');
}

function addData (req, res) {
  let url = req.body
  console.log(url);
  res.json('You posted')
}
