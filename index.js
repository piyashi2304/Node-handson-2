const express=require("express")
const app = express()

app.get('/',(req,res)=>{
    res.send("hello world")
})

app.get('/api/main',(req,res)=>{
    res.send("This is my server using express")
})
app.listen(5050,()=>{
    console.log("Server Started")
})

