const express = require("express");
const data = require("./data");

const app = express();

//creates a express server in port number 3000 
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});



//this will take the request query from the url/path given, /api/001?name=hello&age=23
app.get("/api/:id", (req, res) => {
  const { id } = req.params;
  const { query } = req;

  const info = {
    id,
    query,
  };

  res.json(info);
});

// ****************************************************************************************************************
