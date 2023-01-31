
// 4e 
import mongoose from 'mongoose';
import { Router } from 'express';
import Restaurant from '../model/restaurant';
import bodyParser from 'body-parser';

// 4f
export default({ config, db }) => {
  let api = Router();

  // CRUD - Create Read Update Delete

  // 5 Retrieving Data (GET requests in Node)
  // 5a
  // '/v1/restaurant' - GET all restaurants
  api.get('/', (req, res) => {
    // {} is find everything on Restaurant database
    // retaurants id the collection/table on database
    Restaurant.find({}, (err, restaurants) => { 
      if (err) { // if get errror, send it back as response
        res.send(err);
      }
      // send response as json file, and send back the restaurants collections data to client
      res.json(restaurants);
    });
  });

  // 5b get specific object 
  // '/v1/restaurant/:id' - GET a specific restaurant
  // :id signifies to express and mongoose. This id is going to be a variable
  // that we're going to pass in
  api.get('/:id', (req, res) => { 
    // :id tell express req.params.id is a paramter
    Restaurant.findById(req.params.id, (err, restaurant) => {
      if (err) {
        res.send(err);
      }
      res.json(restaurant);
    });
  });

  // 4g , v1; is version 1 => can be v2 version 2
  // '/v1/restaurant/add' - POST - add a restaurant
  api.post('/add', (req, res) => { //create route and function
    let newRest = new Restaurant(); // new restaurant object from mongoose model
    newRest.name = req.body.name; // assign simple name property, value get  from client

    newRest.save(function(err) {
      if (err) {  // to check the error
        res.send(err);
      }
      res.json({ message: 'Restaurant saved successfully' }); //send back json with message
    });
  });

  // 7 Deleting Data (DELETE requests in Node)
  // '/v1/restaurant/:id' - DELETE - remove a restaurant
  api.delete('/:id', (req, res) => { // Specify our path "/:id" and pass in req and res for arguments
    Restaurant.remove({ // call remove method by passing _id
      _id: req.params.id
    }, (err, restaurant) => { // chainning on either give error or restaurant obj back
      if (err) {  // to check the error
        res.send(err); // send it back error
      } // otherwise, if not get error, a send message
      res.json({message: "Restaurant Successfully Removed"});
    });
  });

  // 6 Updating Data (PUT requests in Node)
  // '/v1/restaurant/:id' - PUT - update an existing record
  api.put('/:id', (req, res) => { // pass in the id and the  json trough "Req"
    Restaurant.findById(req.params.id, (err, restaurant) => { // pass the id, error and restaurant obj // find the restaurant by id,
      if (err) { // to check the error: if there is error, we send it back
        res.send(err);
      }
      restaurant.name = req.body.name; // found the restaurant obj and reassign the property equal the name we pass in (req) our request body. 
      restaurant.save(function(err) { // resave it
        if (err) { 
          res.send(err);
        }
        res.json({ message: 'Restaurant info updated' }); //send back json with message property
      });
    });
  });

  // Body Request to update data by client side
/* {
  "name": "Burger King Sidoarjo"
}
 */

  return api;
}

