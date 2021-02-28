const nodeMailer = require('nodemailer');
const cron = require('node-cron');
// require('dotenv').config();

// email message options
const mailOptions = {
    from: 'dev_tools@hotmail.com',
    to: 'maiyiax@gmail.com', // change it to take user input
    subject: 'Email from Dev Study Team',
    text: 'Test messate' // change to take user input
};

// email transport configuration
const transporter = nodeMailer.createTransport({
    service: 'hotmail',
    auth: {
        user: 'dev_tools@hotmail.com',
        pass: 'Thisisthepassword123',
    }
})

// send the email once a day
cron.schedule('0 11 * * *', () => {
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(console.error);
        } else {
            console.log("Email send: " + info.response)
        }
    });
});