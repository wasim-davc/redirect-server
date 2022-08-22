const express = require("express");
const request = require('request');
const PORT = process.env.PORT || 3001;
const app = express();

app.get("/", (req, res) =>{
  res.redirect("https://themoviesking.herokuapp.com");
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
}); 