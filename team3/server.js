const http=require('http');
const port=2222
const server=http.createServer((request,response)=>{
  response.statusCode=200;
  response.setHeader("Content-type","text/plain")
  response.end("I don't understand it")  
})
server.listen(port,()=>{
    console.log("Server started running")
})