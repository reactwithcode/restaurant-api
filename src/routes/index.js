// Setting up MongoDB for Node API
// 3a setup routes
import express from 'express';
import config from '../config';
import middleware from '../middleware';
// 3b create db.js (db config) in src folder

// 3d import the db (to make database connection)
import initializeDb from '../db';  // handle the connection
// 4d, make controller folder and foodtruck.js
import restaurant from '../controller/restaurant';

// 3e
let router = express();

// 3f
// connect to db
initializeDb(db => {

  // 3f
  // internal middleware
  router.use(middleware({ config, db }));

  // anything that we have in the middleware will be add in below here
  // api routes v1 (/v1)
  // 4c 
  // foodtruck will control our foodtruck part of API here
  router.use('/restaurant', restaurant({ config, db }));
});

// 3g
export default router;
