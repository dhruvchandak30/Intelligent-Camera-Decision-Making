const nodemailer = require('nodemailer');
require("dotenv").config();



const mail=(req,res)=>{

    const transporter = nodemailer.createTransport({
        service:'gmail',
        auth: { 
          user: process.env.EMAIL,
          pass: process.env.PASSWORD
        },
      });

    const response=req.body
    
    const mailOptions = {
        from: 'krishnakhattri24@gmail.com',
        to: response.to,
        subject: "first ",
        text: "heello i am krishna"
      };
    
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            res.status(500).json({
                success: false,
                data: error.message,
                message: "error occured",
              });
          return console.error(`Error sending email: ${error.message}`);

        } else {
            res.status(200).json({
                success: true,
                message: "mail sent",
              });
        }
       
      });

}

module.exports=mail;