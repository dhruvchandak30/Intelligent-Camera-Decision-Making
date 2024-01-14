const twilio = require("twilio");
require("dotenv").config();

// Replace these values with your Twilio Account SID, Auth Token, and Twilio phone number
const accountSid = process.env.SID;
const authToken = process.env.TOKEN;
const twilioPhoneNumber = process.env.PHONE;
const user=process.env.USER;

const client = twilio(accountSid, authToken);

const notification = (req, res) => {
  console.log(req.body);

  const response = req.body;
  // const message="hello message recieved"

  if (!response.message) return;

  client.messages
    .create({
      body: response.message,
      from: twilioPhoneNumber,
      to: user
    })
    .then((message) => {
      res.status(200).json({
        success: true,
        data: message,
        message: "entry UPDATED succesfully",
      });
    })
    .catch((error) => {
      res.status(404).json({
        success: false,
        data: error.message,
        message: "entry UPDATED succesfully",
      });
    });
};

module.exports = notification;