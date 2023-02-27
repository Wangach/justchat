const mongoose = require('mongoose');
const url = "mongodb://127.0.0.1:27017";
const dbName = "chatapp";
const mongooseOptions =  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }

mongoose.set('strictQuery', true);
const main = async() => {
   let cxnStr = await mongoose.connect(`${url}/${dbName}`, mongooseOptions);
   return cxnStr;
}

module.exports = main;