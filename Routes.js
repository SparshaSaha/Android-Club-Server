const User=require("./Models/User");


module.exports= function(app,mongo){
  app.get("/upload_details",(req,res)=>{

    var user={

      reg_no:req.query.reg_no,
      mac:req.query.mac,
      unique_msg:""
    }

    //calculate unique message
    
  });
}
