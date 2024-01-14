const notification=require("../controllers/notification")
const express=require('express')
const router = express.Router();


router.post('/sendNotification',notification)

module.exports=router;