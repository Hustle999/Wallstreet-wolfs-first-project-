import express from "express"
import bodyParser from "body-parser";
import cors from 'cors'
import fs from 'fs'

const port =1234;
const app=express()

app.use(bodyParser.json())
app.use(cors())
app.get("/",(request,response)=>{
  response.json(
    {
      greeting:"Hello Iam get"
    }
  )
})
app.post("/sign-up",(request,response)=>{
  const {name,email,password}=request.body
  fs.readFile("./back-end/lib/data.json","utf-8",(readError,data)=>{
  if(readError)
  {
    response.json({
      success:false
    })
  }
  let savedData=data ? JSON.parse(data) : []
  const newUser={
    id:Date.now().toString(),
    name:name,
    email:email,
    password:password
  }
  savedData.push(newUser)
  fs.writeFile("./back-end/lib/data.json",JSON.stringify(savedData),(error)=>{
if(error)
{
  response.json(
    {
      success:false
    }
  )
}
else
{
  response.json({
    success:true,
    user:newUser
  })
}
  })
  })
})


app.post("/sign-in",(request,response)=>{

})
app.listen(port,()=>{
  console.log(`Server is started working http:localhost:${port}`)
})
