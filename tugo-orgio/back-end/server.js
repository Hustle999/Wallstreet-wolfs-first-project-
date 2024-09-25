import express from "express";
import bodyParser from "body-parser";

const port = 9999;
const app = express();

app.use(bodyParser.text());

app.get("/", (request, response) => {
  response.send("Username yvlaa");
});

app.listen(port, () => {
  console.log(`server ajillaj ehellee http://localhost:${port}`);
});
