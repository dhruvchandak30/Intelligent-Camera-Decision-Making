const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes/userRoutes");
require("dotenv").config({ path: __dirname + "/.env" });
const connectDB = require("./utils/database");
const cors = require("cors");
const fs = require("fs");

const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/v1", routes);

app.use(bodyParser.json({ limit: "200mb" }));
app.use(bodyParser.urlencoded({ limit: "200mb", extended: true }));

// app.post("/api/receivePost", (req, res) => {
//   const receivedData = req.body.message;

//   console.log("Received This from Python:", receivedData);
//   res.json({
//     message: `Post Request Received on the server ${receivedData}`,
//   });
// });
app.post("/api/receiveImageChunk", (req, res) => {
  const receivedImageChunk = req.body.image_chunk;

  // Decode the base64-encoded chunk
  const imageChunkBuffer = Buffer.from(receivedImageChunk, "base64");

  // Append the chunk to the file (assuming the file is created earlier)
  fs.appendFileSync("received_image1.png", imageChunkBuffer, "base64");

  console.log("Image chunk received and saved.");

  res.json({
    message: "Image chunk received on the server",
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server Listening on Port ${PORT}`);
});
