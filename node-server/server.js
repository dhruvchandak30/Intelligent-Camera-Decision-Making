// const express = require("express");
// const bodyParser = require("body-parser");
// const routes = require("./routes/userRoutes");
// require("dotenv").config({ path: __dirname + "/.env" });
// const connectDB = require("./utils/database");
// const cors = require("cors");
// const fs = require("fs");

// const app = express();
// app.use(cors());
// app.use(express.json());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use("/v1", routes);

// app.use(bodyParser.json({ limit: "200mb" }));
// app.use(bodyParser.urlencoded({ limit: "200mb", extended: true }));

// // app.post("/api/receivePost", (req, res) => {
// //   const receivedData = req.body.message;

// //   console.log("Received This from Python:", receivedData);
// //   res.json({
// //     message: `Post Request Received on the server ${receivedData}`,
// //   });
// // });
// app.post("/api/receiveImageChunk", (req, res) => {
//   const receivedImageChunk = req.body.image_chunk;

//   // Decode the base64-encoded chunk
//   const imageChunkBuffer = Buffer.from(receivedImageChunk, "base64");

//   // Append the chunk to the file (assuming the file is created earlier)
//   fs.appendFileSync("received_image1.png", imageChunkBuffer, "base64");

//   console.log("Image chunk received and saved.");

//   res.json({
//     message: "Image chunk received on the server",
//   });
// });

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server Listening on Port ${PORT}`);
// });

const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes/userRoutes");
const http = require("http");
const connectDB = require("./utils/database");
const cors = require("cors");
const { Server } = require("socket.io"); // Import Server from socket.io

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
  },
});

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  })
);
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/v1", routes);

// Socket.IO connection event
io.on("connection", (socket) => {
  console.log("A user connected");

  socket.on("messageFromFrontend", (message) => {
    console.log("Message from frontend:", message);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
});

app.post("/api/receiveImageChunk", (req, res) => {
  console.log(req.body.image_url, req.body.result);
  io.emit("messageFromServer", req.body.result, req.body.image_url);
  res.json({
    message: "Image received on the server",
  });
});

app.post("/api/recieveTrafficNumber", (req, res) => {
  console.log(req.body.number);
  io.emit("messageFromTraffic", req.body.number);
  res.json({
    message: "Traffic Number received on the server",
  });
});

app.post("/api/recieveActivityPrediction", (req, res) => {
  console.log(req.body.prediction);
  io.emit("messageFromActivity", req.body.prediction);
  res.json({
    message: "ACtivity predictions received on the server",
  });
});

// Start the server
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server Listening on Port ${PORT}`);
});
