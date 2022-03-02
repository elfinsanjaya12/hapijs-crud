'use strict';

const Hapi = require('@hapi/hapi');

const init = async () => {
  const server = Hapi.server({
    port: 3000,
    host: 'localhost',
  });
  const routes = require('./routes');
  server.route(routes);
  server.route({
    method: 'GET',
    path: '/',
    handler: (request, h) => {
      return h
        .response({
          status: 200,
          data: 'Hello',
        })
        .code(200);
    },
  });

  await server.start();
  console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});

init();
