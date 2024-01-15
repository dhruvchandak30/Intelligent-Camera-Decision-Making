const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes/userRoutes");
require("dotenv").config({ path: __dirname + "/.env" });
const connectDB = require("./utils/database");
const cors = require("cors");

const app = express();
app.use(cors());

app.use(express.json());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/v1", routes);

app.get("/", (req, res) => {
  res.send({
    msg: "Api is Running",
  });
});

app.post("/api/receivePost", (req, res) => {
  const receivedData = req.body.message;

  console.log("Received This from Python:", receivedData);
  res.json({
    message: `Post Request Received on the server ${receivedData}`,
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server Listening on Port ${PORT}`);
});
