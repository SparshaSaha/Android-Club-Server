const User=require("./Models/User");


module.exports= function(app,mongo){
  app.get("/upload_details",(req,res)=>{

    var user={

      reg_no:req.query.reg_no,
      mac:req.query.mac,
      unique_msg:""
    }
    var t=""
    //calculate unique message
      for(var i=0;i<=user.mac.length;i++)
      {
        var c=user.mac.charAt(i).charCodeAt(0);
        c=c+user.reg_no;
        t=t+String.fromCharCode(c%127);
      }

      res.send(t);
  });
}
