//4f make model folder and model file
import mongoose from 'mongoose';
let Schema = mongoose.Schema; //blueprint for data model that we will use

let RestaurantSchema = new Schema({
  name: String // property w/ string data type
});

// 4f
// specify model name and the schema
module.exports = mongoose.model('Restaurant', RestaurantSchema);
