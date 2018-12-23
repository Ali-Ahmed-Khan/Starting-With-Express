const express = require("express");
const app = express();
const port = process.env.PORT || 9000;

app.get("/", (req, res) => {
  res.send("Aur Abdul Malik, kya chalra?")
})

app.listen(port, () => {
  console.log(`Server is running at ${port}`)
})