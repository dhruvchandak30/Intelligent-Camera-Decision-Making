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

// Start the server
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server Listening on Port ${PORT}`);
});
