const express = require("express");
const app = express();

app.use(express.json());

const VERIFY_TOKEN = "facebook123";

// verify webhook
app.get("/webhook", (req, res) => {
  if (req.query["hub.verify_token"] === VERIFY_TOKEN) {
    return res.send(req.query["hub.challenge"]);
  }
  res.send("error");
});

// receive data
app.post("/webhook", (req, res) => {
  console.log("Lead Data:", JSON.stringify(req.body, null, 2));
  res.sendStatus(200);
});

app.get("/", (req, res) => {
  res.send("Server Running");
});

app.listen(3000, () => console.log("Server started"));
