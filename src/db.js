// 3c setup db 
import mongoose from 'mongoose';

export default callback => {
  // 27017 is port mongo run on
  // restaurant-api is the database's name
  let db = mongoose.connect('mongodb://localhost:27017/restaurant-api', {useMongoClient:true});
  // pass/menyampaikan what db is 
  callback(db);
}
