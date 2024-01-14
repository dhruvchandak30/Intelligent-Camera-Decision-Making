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
            console.log("came");
            res.status(404).json({
                success: false,
                data: error.message,
                message: "entry UPDATED succesfully",
              });
          return console.error(`Error sending email: ${error.message}`);

        } else {
            console.log("not came");
            res.status(200).json({
                success: true,
                data: message,
                message: "entry UPDATED succesfully",
              });
              console.log("done");
        }
       
      });

}

module.exports=mail;