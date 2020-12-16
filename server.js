import fastify from './app.js'

const HOST = '0.0.0.0'
const PORT = process.env.PORT || 3000;

fastify.listen({host: HOST, port: PORT}, (err) => {
  if (err) {
    log.error(err);
    process.exit(1);
  }
});
