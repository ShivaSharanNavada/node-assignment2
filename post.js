const express = require("express");
const data = require("./data");
const app = express();

//creates a express server in port number 3000 
app.listen(3000, () => {
  console.log(`Server running on port 3000`);
});

app.get("/", (req, res) => {
  res.json({ message: "api is working" });
});

//this will fetch the data from json
app.get("/api/data", (req, res) => {
  res.json(data);
});

//post request
//i have used thunder client vs-code extention to post a request and data is sent in body -> json 
app.use(express.json());
app.post("/api/data", (req, res) => {
  const user = {
    id: data.length + 1,
    name: req.body.name,
  };
  data.push(user);
  res.json(user);
});
