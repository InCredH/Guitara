import express from "express";
const path = require('path');
const app = express()
app.use(express.static('public'));

app.listen(8800,()=>{
    console.log("Successfully listening on port 8800");
})

app.get("/",(req, res)=>{
    res.sendFile(path.join(__dirname + "/frontend/public/index.html"));
    // console.log(__dirname);
})


app.get("/about",(req, res)=>{
    res.send("hello this is the landing page of guitara");
})

app.get("/tools",(req, res)=>{
    res.send("hello this is the tools page of guitara");
})

app.get("/lessons",(req, res)=>{
    res.send("hello this is the lessons page of guitara");
})

app.get("/exercise",(req, res)=>{
    res.send("hello this is the exercises page of guitara");
})

app.get("/login",(req, res)=>{
    res.send("hello this is the login page of guitara");
})

app.get("/signup",(req, res)=>{
    res.send("hello this is the signup page of guitara");
})
app.get("/community", (req, res)=>{
    res.send("hello this is the community page of guitara");
})

app.get("/tools", (req, res)=>{
    res.send("hello this is the tools page of guitara");
})

app.get("/tools/:toolName", (req, res)=>{
    res.send("hello this is the " + req.params.toolName + " page of guitara")
})

app.get("/lessons/:lessonName", (req, res)=>{
    res.send("hello this is the " + req.params.lessonName + " page of guitara")
})

app.get("/exercise/:exerciseName", (req, res)=>{
    res.send("hello this is the " + req.params.exerciseName + " page of guitara")
})