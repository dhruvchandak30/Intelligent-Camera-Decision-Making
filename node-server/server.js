const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes/userRoutes");
require("dotenv").config({ path: __dirname + "/.env" });
const { Server } = require('socket.io');
const http=require('http')
const connectDB = require("./utils/database");
const cors = require("cors");
const fs = require("fs");

const app = express();
const server=http.createServer(app)
const io = new Server(server,{
  cors:{
    origin:"http://localhost:3000",
    methods:["GET","POST"]
  }
});
 
io.on('connection', (socket) => {
  console.log('a user connected');
  const message="kaskb ash !!!!"
socket.emit('chat',message);
});

// const message="kaskb ash !!!!"
// io.emit('chat',message);

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/v1", routes);

app.use(bodyParser.json({ limit: "200mb" }));
app.use(bodyParser.urlencoded({ limit: "200mb", extended: true }));



const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`Server Listening on Port ${PORT}`);
});
