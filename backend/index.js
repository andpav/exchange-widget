const express = require('express')
const cors = require('cors')
const rates = require('./rates')
const wallets = require('./wallets')
const path = require('path');
const https = require('https');

const app = express()
const port = 8082

app.use(cors())

const parser = function (req, res, next) {
  var body = [];
  req.on('data', function (chunk) {
    body.push(chunk);
  }).on('end', function () {
    body = Buffer.concat(body).toString();
    console.log(body, ' body!!!')
    body = JSON.parse(body);
    req.body = body;
    next();
  });
};

app.use('/public', express.static(path.resolve(__dirname, 'public')));

app.get('/', (request, response) => {
  response.send('It\'s alive!');
});

app.get('/api/wallets', (request, response) => {
  response.send(wallets);
});

app.post('/api/wallets', parser, (request, response) => {

  response.send(200);
});

app.get('/api/rates', (request, response) => {
  const ratesApiUrl = 'https://api.exchangeratesapi.io/latest';

  https.get(ratesApiUrl, (res) => {
    res.on('data', (data) => {
      response.send(data.rates);
    });
  }).on('error', () => {
    response.send(rates);
  });
});

app.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err);
  }
  console.log(`server is listening on ${port}`);
});
