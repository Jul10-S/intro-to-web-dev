const express = require("express");
const path = require("path");


const compliments = [
  "You like nice today",
  "That dress looks nice on you",
  "Have you been working out?",
  "You can do hard things",
  "You've gotten far in this course. You're really smart",
  "You're programming! How cool is that?",
  "I'm really proud of you",
  "You made this",
  "You've learned a lot of things, and that's pretty hard to do"
];

const insults = [
  "You fear success, but really have nothing to worry about.",
  "You are proof that evolution CAN go in reverse.",
  "Brains aren't everything. In fact in your case they're nothing.",
  "I love what you've done with your hair. How did you get it to come out of one nostril like that?",
  "You are so old, the candles on your birthday cake raised earth's temperature by 3 degrees.",
  "Is your name Maple Syrup? It should be, you sap.",
  "You're so dumb, your dog teaches you tricks.",
  "You are living proof that God has a sense of humor.",
  "You stare at frozen juice cans because they say, \"concentrate\"."
];

function getRandomCompliment() {
  const randomIndex = Math.floor(Math.random() * compliments.length);
  return compliments[randomIndex];
}
function getRandomInsult() {  // From the elements on the 'insults' object, returns a random insult
  const randomIndex = Math.floor(Math.random() * insults.length);
  return insults[randomIndex];
}

const app = express(); // Generates the server's skeleton(?

app.get("/", function(req, res) { // When the root dir is requested, the server responds with the index.html file
  res.sendFile(path.join(__dirname, "index.html"));
});


app.get("/compliments", function(req, res) {
  res
    .json({
      compliment: getRandomCompliment()
    })
    .end();
});

app.get("/insults", function(req, res) {
  /* When the button 'Insult me' is pressed, a new .json file is generated and inside that file 
  the server will give the insult element the randomly generated insult*/
  res
    .json({
      insult: getRandomInsult()
    })
    .end();
});


app.use("/public", express.static("./public"));
app.listen(3000);
console.log("Listening on http://localhost:3000");