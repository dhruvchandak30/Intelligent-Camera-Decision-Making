const express = require("express");
const routes=require("./routes/userRoutes")
require("dotenv").config({ path: __dirname + "/.env" });


const app = express();




app.use(express.json());

app.use("/v1",routes)


app.get("/", (req, res) => {
  res.send({
    msg: "Api is Running",
  });
});



const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server Listening on Port ${PORT}`);
});
