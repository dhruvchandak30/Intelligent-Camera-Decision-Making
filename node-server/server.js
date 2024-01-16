const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes/userRoutes");
require("dotenv").config({ path: __dirname + "/.env" });
const { Server } = require("socket.io");
const http = require("http");
const connectDB = require("./utils/database");
const cors = require("cors");
const fs = require("fs");

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

// const message="kaskb ash !!!!"
// io.emit('chat',message);

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/v1", routes);

app.post("/api/receiveImageChunk", (req, res) => {
  io.on("connection", (socket) => {
    const data = {
      img: req.body.image_url,
      title: req.body.result,
    };
    socket.emit("Data", data);
  });

  res.json({
    message: "Image received on the server",
  });
});

app.use(bodyParser.json({ limit: "200mb" }));
app.use(bodyParser.urlencoded({ limit: "200mb", extended: true }));

// app.post("/api/receivePost", (req, res) => {
// const receivedData = req.body.message

//   console.log("Received This from Python:", receivedData);
//   res.json({
//     message: `Post Request Received on the server ${receivedData}`,
//   });
// });

// app.post("/api/receiveImageChunk", (req, res) => {
//   const receivedImageChunk = req.body.image_chunk;
//   const ObjectResult = req.body.result;
//   console.log(ObjectResult);

//   // Decode the base64-encoded chunk
//   const imageChunkBuffer = Buffer.from(receivedImageChunk, "base64");

//   // Append the chunk to the file (assuming the file is created earlier)
//   fs.appendFileSync("Hello.png", imageChunkBuffer, "base64");

//   console.log("Image chunk received and saved.");

//   res.json({
//     message: "Image chunk received on the server",
//   });
// });

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`Server Listening on Port ${PORT}`);
});
