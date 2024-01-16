const notification=require("../controllers/notification")
const mail=require("../controllers/mail")
const express=require('express')
const router = express.Router();


router.post('/sendNotification',notification)
router.post('/sendMail',mail)
router.post("/api/receiveImageChunk",)
// router.get("/getDetails",)

module.exports=router;