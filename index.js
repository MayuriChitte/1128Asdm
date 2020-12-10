var express=require("express");
var app=express();

app.get("/",function(req,res){
    res.send("Rockwell Automation Inc.");
});
console.log("Rockwell Automation Inc. ");
app.listen("7070");