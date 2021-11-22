const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerParser = require('swagger-parser')
const { connector } = require('swagger-routes-express');
const api = require('./api');

const makeApp = async () => {
  const parser = new swaggerParser();
  const apiDefinition = await parser.validate('./docs/openapi.yaml');
  const connect = connector(api, apiDefinition) // make the connector
  const app = express() // make the app
  // parse post request body as json
  express.json();
  // do any other app stuff, such as wire in passport, use cors etc
  app.use('/api-docs',swaggerUi.serve, swaggerUi.setup(apiDefinition));

  connect(app); // attach the routes

  // add any error handlers last

  return app;
}
module.exports = makeApp;