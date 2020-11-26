const server = require('./app');

const HOST = '0.0.0.0'
const PORT = process.env.PORT || 3000;

server.listen({host: HOST, port: PORT}, (err) => {
  if (err) {
    server.log.error(err);
    process.exit(1);
  }
});
