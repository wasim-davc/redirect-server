const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;


app.get("/", (req, res) =>{
  res.redirect(301, "https://moviesking.onrender.com");
});


app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
}); 