const Ministun = require('ministun');

const config = {
  udp4: true,
  udp6: true,
  port: process.env.PORT || 3000,
  log: console.log,
  err: console.error,
  sw: true
};

const server = new Ministun(config);

async function startServer() {
  try {
    await server.start();
    console.log(`STUN server listening on port ${config.port}`);
  } catch (err) {
    console.error('Failed to start STUN server:', err);
  }
}

startServer();
