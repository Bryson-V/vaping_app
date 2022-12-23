// const nodemailer = require('nodemailer')
// const {google} = require ('googleapis')

// const CLIENT_ID = '1086495023296-0vi82fbmaovn7qqfii82ii5iru46leb5.apps.googleusercontent.com'
// const CLIENT_SECRET = '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'
// const REDIRECT_URI = 'https://developers.google.com/oauthplayground'
// const REFRESH_TOKEN = '1//04B99pcBeK2PoCgYIARAAGAQSNwF-L9Irq1NzzGxSOxQ-0diSx2W2LZ3BPwXpmagrFmCsuMWe9KnsGjUTSkCMzj-HBxSlDWzIO24'

// const oAuth2Client = new google.auth.OAuth2(
// CLIENT_ID,
// CLIENT_SECRET,
// REDIRECT_URI
// );
// oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

// async function sendMail() {
// try {
//   const accessToken = await oAuth2Client.getAccessToken();

//   const transport = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//       type: 'OAuth2',
//       user: 'bvil536@gmail.com',
//       clientId: CLIENT_ID,
//       clientSecret: CLIENT_SECRET,
//       refreshToken: REFRESH_TOKEN,
//       accessToken: accessToken,
//     },
//   });

//   const mailOptions = {
//     from: 'bvil536@gmail.com',
//     to: 'bvil536@gmail.com',
//     subject: 'Hello from gmail using API',
//     text: 'Hello from gmail email using API',
//     html: '<h1>Hello from gmail email using API</h1>',
//   };

//   const result = await transport.sendMail(mailOptions);
//   return result;
// } catch (error) {
//   return error;
// }
// }

// await fetch("http://localhost:3000/mail", {
//      method: "POST",
//      headers: {
//        "Content-Type": "application/json",
//      },
//     })
// sendMail()
// .then((result) => console.log('Email sent...', result))
// .catch((error) => console.log(error.message));
// Navigate("/")