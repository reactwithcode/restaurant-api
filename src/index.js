// 2 make src folder and app.js file
// 2a Setting up MongoDB for Node API
import http from 'http';
import express from 'express';
import bodyParser from 'body-parser'; // parse json request obj
import mongoose from 'mongoose'; // medium to see interdace mongodb in elegent ways
import config from './config';
import routes from './routes';  // take where we go

// 2b
// create our app
let app = express();
app.server = http.createServer(app);

// 2c
// middleware
// 4 Adding Data (POST requests in Node)
// intercept/prevent request before it gets to our handlers and do some kind of operation
// 4a
// parse application/json
app.use(bodyParser.json({
  limit : config.bodyLimit //limit the size of data that can be passing
}));

// passport config

// api routes v1
app.use('/v1', routes);

app.server.listen(config.port);

console.log(`Started on port ${app.server.address().port}`);

export default app;
