const express =require("express")
const hbs = require("hbs");
const app=express();
app.set("view engine", "hbs");

app.use((req,res,next)=>{
    console.log("http method ->"+ req.method +",URL->"+req.url);
    next();
})

app.get("/",(req,res) => {
    res.render("index");
})

app.get("/home", (req, res) => {
    res.render("home");
})

app.post("/post",(req,res)=>{
    res.send("Hey I am using express js");
})

app.listen(3000, () => {
    console.log("Server running in port 3000");
})