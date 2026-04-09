"use strict";

const express = require("express");
const app = express();

const port = 8080;

app.get('/randomimg', async (req, res) => {
 
  try {
     const unsplashRes = await fetch(`https://api.unsplash.com/photos/random?query=dark+ocean&client_id=${process.env.UNSPLASH_KEY}`);

    if (!unsplashRes.ok) {
      throw new Error("API request failed");
    }
    const data = await unsplashRes.json();
    res.send(data);
console.log(data);
  
} catch (err) {
    console.error("Image error:", err);
  }
});

app.use("/",express.static("./public"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.listen(port, () => {
  console.log(`Server is running http://localhost:${port}`);
  console.log("Press Ctrl+C to end this process.");
});