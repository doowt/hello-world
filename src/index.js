const express = require('express');
const app = express();
const port = 3000;
const timeout = 10000;

app.get('/', (request, response) => {
  response.send("Hello world!");
});

const server = app.listen(port, () => {
  console.log('Server running on localhost:%s', port);
});

if (timeout != 0) {
  console.log('Server set to shutdown gracefully in %s ms', timeout);
  setTimeout(() => {
    console.log('Server shutting down due to timeout');
    server.close(() => {});
  }, Number(timeout));
}

const {
  generateKeyPairSync,
  createHash,
  createHmac,
} = require('crypto');

generateKeyPairSync('rsa', { modulusLength: 2048 });
generateKeyPairSync('ed25519');
const { ml_dsa65 } = require('@noble/post-quantum/ml-dsa.js');
ml_dsa65.keygen();
createHash('sha256').update('test').digest('hex');
createHash('sha3-256').update('test').digest('hex');
createHash('blake2b512').update('test').digest('hex');
createHmac('sha256', 'secret').update('test').digest('hex');
