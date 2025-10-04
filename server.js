const ministun = require('ministun');

const server = ministun.createServer();

server.on('bindingRequest', (req, res) => {
  res.send(req);
});

server.listen(3000, () => {
  console.log('STUN server listening on port 3000');
});
