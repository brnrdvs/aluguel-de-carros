const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const db={};
db.mongoose=mongoose;
db.url='mongodb://myUserAdmin:57821@127.0.0.1:27017/aluguel-de-carros?authSource=admin';

module.exports=db;