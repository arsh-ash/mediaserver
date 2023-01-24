const express=require("express");

const Router=express.Router();

const media=require("./media")

Router.use("/media",media);

module.exports=Router;
