const express = require("express");
const app = express();
const port = process.env.PORT || 9000;

app.get("/", (req, res) => {
  res.send("Kashif kills Wasif")
})

app.listen(port, () => {
  console.log(`Server is running at ${port}`)
})