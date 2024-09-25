import express from "express"
import bodyParser from "body-parser";
import cors from 'cors'
import fs from 'fs'
const port =1234;
const app=express()
app.get("/",(request,response)=>{
  response.json(
    {
      greeting:"Hello Iam get"
    }
  )
})
app.post("/",(request,response)=>{
  response.json(
    {
      greeting:"Hello Iam Post"
    }
  )
})
app.listen(port,()=>{
  console.log(`Server is started working`)
})
