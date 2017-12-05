const User=require("./Models/User");


module.exports= function(app,mongo){
  app.get("/upload_details",(req,res)=>{

    var user=new User({

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

      res.send("Error....Upload not sucessful");
      throw(err);
    }
      else {
        res.send(user.unique_msg);
      }

    });

      res.send(t);
  });
}
