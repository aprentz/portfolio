import nodemailer from "nodemailer"
import express from "express";
import cors from 'cors';

const app = express();
app.use(express.json());


const router = express.Router()



const PORT = process.env.PORT || 5000

const allowedOrigins = ['http://127.0.0.1:5173', 'http://localhost:5173'];

app.use(cors({
   origin: allowedOrigins
}))


app.use(router)

app.listen(PORT, () => {
   console.log(`Mail server is running on http://localhost:${PORT}`)
});

const contact = async (req, res) => {

   const transporter = nodemailer.createTransport({
      host: 'smtp-mail.outlook.com',
      port: 587,
      auth: {
         user: 'alex.rentz@outlook.com',
         pass: 'vgpcdpcmetvtqyfe'
      }
   });

   const name = req.body.firstName + req.body.lastName;
   const phone = req.body.phone;
   const email = req.body.email;
   const message = req.body.message;

   let mail = {
      from: name,
      to: "alex.rentz@outlook.com",
      subject: "Contact form submission - Portfolio",
      text: message,
      html: `
            <p>Name: ${name}</p>
            <p>Phone: ${phone}</p>
            <p>Email: ${email}</p>
            <p>Message: ${message}</p>
            `
   }

   transporter.sendMail(mail).then(() => {
      return res.status(201).json({
         msg: "You should receive an email",
      })
   }).catch(error => {
      console.log(error)
      return res.status(500).json({
         error: "no bueno",
      })
   })
}

router.post("/contact", contact)