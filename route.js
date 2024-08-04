const express=require("express");
const {setData,getData,redirectionlink,dellink,increaseClick}=require("../controller/controll");
const r=express.Router();
r.route("/").post(setData);
r.route("/getdata").get(getData);
r.route("/:Short_URL").post(redirectionlink);
r.route("/deletelink").delete(dellink);
r.route("/increaseclick").post(increaseClick);
module.exports=r;