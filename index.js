const express = require("express");
const ap =express();

const port = 8081;
//const {books}=require("./data/books.json");
//const {users}=require("./data/user.json");
ap.use(express.json());
ap.get("/",(req,res)=>{
    res.status(200).json({
        message:"hey we are running good stuf ",
        data:9594
    })
})
/*
>>route: /user
>>method: GET
>>descrption: GET ALL USER
>>access:public
>> paramters:none
*/

/**
 * /users
GET: Get all list of users
 */
/*ap.get("/users",(req,res)=>{
    res.status(200).json({
        success:true,
        // data:users
    })
})
*/

ap.all("*",(req,res)=>{
    res.status(500).json({
        message:"not found"
    })
})
ap.listen(port,()=>{
    console.log(`server is running in port${port}`)
})