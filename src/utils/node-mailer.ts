import nodemailer from "nodemailer";
import "dotenv/config";

const transporter = nodemailer.createTransport({
  service: "Gmail",
  port: 25,
  secure: false,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

const SendEmail = async (data: any) => {
  try {
    const info = await transporter.sendMail(data);
    return info;
  } catch (error) {
    return false;
  }
};

export default SendEmail;
