const User=require("./Models/User");


module.exports= function(app,mongo){
  app.get("/upload_details",(req,res)=>{
    var z=0;
    if(req.query.reg_no!=null && req.query.mac!=null)
    z=1;

    var user;
    if(z==1){
    user=new User({

      reg_no:req.query.reg_no,
      mac:req.query.mac,
      unique_msg:""
    });
    var t=""
    //calculate unique message
      for(var i=0;i<=user.mac.length;i++)
      {
        var c=user.mac.charAt(i).charCodeAt(0);
        c=c+user.reg_no;
        t=t+String.fromCharCode(c%120);
      }

      user.unique_msg=t;

      user.save((err,res1)=>
    {

      if(err){

      res.send("Error....Upload not sucessful mostly due to redundant data");
      throw(err);
    }
      else {
        res.send(user.unique_msg);
      }

    });
  }
  else {
    res.send("Parameters are wrong");
  }
  });

}
