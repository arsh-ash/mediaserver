const express=require("express");

const Router=express.Router();
const path=require("path")
const multer=require("multer")
const IMAGES_PATH = path.join("/uploads/images");
const { getVideoDurationInSeconds } = require('get-video-duration')

var maxSize = 1 * 1000 * 1000;

 storage = multer.diskStorage({
        destination: function (req, file, cb) {
          console.log("File fetched", file.originalname);
          cb(null, path.join(__dirname, "..", IMAGES_PATH));
        },
        filename: function (req, file, cb) {
          const uniqueSuffix =
          Date.now() + "-" + Math.round(Math.random() * 1e9) + file.originalname;
          console.log("file/file", file);
          
          cb(null, file.fieldname + "-" + uniqueSuffix);
        },
        
      

      })

    const upload=multer({
      storage:storage,
      // limits: { fileSize: maxSize }

    })

Router.get("/uploadImages",upload.single("thumbnail"),(req,res)=>{
  
  console.log("rebody",req.body)
  console.log("req.file",req.file);
  
  return res.status(200).json({
    message:"routes working fine",
    body:req.body.name
})
    
  getVideoDurationInSeconds(req.file.path).then((duration) => {
    console.log(duration)
  })
  
   

})

Router.get("/getdata",(req,res)=>{

  return res.status(200).json({
    message:"code is changed and response is from jenkins "
  })
})

module.exports=Router;