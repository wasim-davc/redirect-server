const express = require("express");
const request = require('request');
const PORT = process.env.PORT || 3001;
const app = express();


app.get("/", (req, res) =>{
  res.redirect(301, "https://themoviesking.herokuapp.com");
});
app.get("/download/download-superman-and-lois-season-1-hindi-720p-1080p", (req, res) =>{
  res.redirect(301, "https://themoviesking.herokuapp.com/download/download-superman-and-lois-season-1-hindi-720p-1080p");
});
app.get("/category/netflix", (req, res) =>{
  res.redirect(301, "https://themoviesking.herokuapp.com/category/netflix");
});
app.get("/category/web-series", (req, res) =>{
  res.redirect(301, "https://themoviesking.herokuapp.com/category/web-series");
});
app.get("/download/download-lekh-2022-punjabi-movie-480p-720p-1080p", (req, res) =>{
  res.redirect(301, "https://themoviesking.herokuapp.com/download/download-lekh-2022-punjabi-movie-480p-720p-1080p");
});


app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
}); 