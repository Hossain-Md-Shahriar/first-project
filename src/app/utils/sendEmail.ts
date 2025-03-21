import nodemailer from 'nodemailer';
import config from '../config';

export const sendEmail = async (to: string, html: string) => {
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: config.NODE_ENV === 'production',
    auth: {
      user: 'hasibshahriar1@gmail.com',
      pass: 'avlx gnxt gcsr dybt',
    },
  });

  // send mail with defined transport object
  await transporter.sendMail({
    from: '"PH University" <hasibshahriar1@gmail.com>', // sender address
    to, // list of receivers
    subject: 'Reset your password within 10 minutes.', // Subject line
    text: '', // plain text body
    html, // html body
  });
};
