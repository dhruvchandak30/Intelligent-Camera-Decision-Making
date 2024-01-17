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
    console.log("hello");
    const sub="Immediate Alert - Confirmed Suspicious Activity"
    const cont=`Dear [Higher Authority's Name],\n\nI urgently report the detection of suspicious activity by our AI surveillance system. [Monitor's Name] has verified and marked the activity as confirmed, triggering an alarm in the designated.\nPlease find the attached suspicious image. area\n\nRegards\nTechnical Team\n\nLink:${response.img}
    `;

    const mailOptions = {
        from: 'krishnakhattri24@gmail.com',
        to: response.to,
        subject: sub,
        text: cont
      };
    
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log(error);
            res.status(500).json({
                success: false,
                data: error.message,
                message: "error occured",
              });
          return console.error(`Error sending email: ${error.message}`);

        } else {
          console.log("ok");
            res.status(200).json({
                success: true,
                message: "mail sent",
              });
        }
       
      });

}

module.exports=mail;