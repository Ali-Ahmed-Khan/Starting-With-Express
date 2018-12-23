const express = require("express");
const app = express();
const port = process.env.PORT || 9000;

app.get("/", (req, res) => {
  res.send("Hi! Thank you for stopping by my repository!")
})

app.listen(port, () => {
  console.log(`Server is running at ${port}`)
})