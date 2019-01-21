/* eslint-disable */
const express = require('express');
const cors = require('cors');
const rates = require('./rates');
const path = require('path');
const https = require('https');

const app = express();
const port = 8082;

let wallets = require('./wallets');

app.use(cors());

const parser = function (req, res, next) {
  let body = [];
  req.on('data', (chunk) => {
    body.push(chunk);
  }).on('end', () => {
    body = Buffer.concat(body).toString();
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
  const { amount, fromWalletId, toWalletId } = request.body;
  const fromWallet = wallets.find((wallet) => wallet.id === fromWalletId);
  const toWallet = wallets.find((wallet) => wallet.id === toWalletId);
  const currentRate = rates[`${fromWallet.currency}${toWallet.currency}`];

  if (fromWallet.id === toWallet.id) { return; }

  wallets = wallets.map((wallet) => {
    if (wallet.id === fromWalletId) return {
      id: wallet.id,
      currency: wallet.currency,
      sign: wallet.sign,
      balance: Math.round((wallet.balance - amount) * 10000) / 10000,
    };

    if (wallet.id === toWalletId) return {
      id: wallet.id,
      currency: wallet.currency,
      sign: wallet.sign,
      balance: Math.round((wallet.balance + (amount * currentRate)) * 10000) / 10000,
    };

    return wallet;
  });

  response.sendStatus(204);
});

app.get('/api/rates', (request, response) => {
  const ratesApiUrl = 'https://api.exchangeratesapi.io/latest';

  https.get(ratesApiUrl, (res) => {
    // res.on('data', (data) => {
    //   response.send(data.rates);
    // });

    response.send(rates);
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
/* eslint-enable */
