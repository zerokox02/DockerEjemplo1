const http = require('http');

function suma(a, b) {
  return a + b;
}

http.createServer((req, res) => {
  res.end('Hola w');
}).listen(3000);

module.exports = { suma };
