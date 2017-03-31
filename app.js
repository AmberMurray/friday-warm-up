const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const rp = require('request-promise')
const data = require('./data')
const port = process.env.PORT || 3000
const path = require('path')


app.use(bodyParser.json())

app.get('/data', sayHello)
app.post('/', addData)

app.listen(port, () => {
  console.log(`Friday Warm Up API on ${port}!!!!!!!`);
})









function sayHello (req, res) {
  res.send('Hello');
}

function addData (req, res) {
  let phrase = req.body.phrase
  let phraseLength = phrase.length
  console.log(phrase, phraseLength)
  res.send(phrase, phraseLength)
}
