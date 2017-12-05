var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//create User schema
var schema =new Schema({
  reg_no:{type: String,required:true ,unique:true},
  mac: {type:String, required:true, unique:true},
  unique_msg:{type:String,required:true}
});

module.exports=mongoose.model('User_profile',schema);
