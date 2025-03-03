'use server';

import NodeMailer from "nodemailer";

export async function GET ( request: Request, response: Response ) {
  return new Response("Success GET API!");
}

export async function POST ( request: Request, response: Response ) {

  const SMTP_SERVER_SERVICE = process.env.SMTP_SERVER_SERVICE; // gmail
  const SMTP_SERVER_HOST = process.env.SMTP_SERVER_HOST; // smtp.gmail.com
  const SMTP_SERVER_USERNAME = process.env.SMTP_SERVER_USERNAME;
  const SMTP_SERVER_PASSWORD = process.env.SMTP_SERVER_PASSWORD;
  const SITE_MAIL_RECIEVER = process.env.SITE_MAIL_RECIEVER;

  const formData = await request.json();
  const name = formData.name || "";
  const email = formData.email || "";
  const contact = formData.contact || "";
  const message = formData.message || "";

  // const email = "gauravalokatul@gmail.com";

  const subject = "Subject";
  const html = "<h2>Text Text</h2>";


  const transporter = NodeMailer.createTransport({
    service: SMTP_SERVER_SERVICE,
    host: SMTP_SERVER_HOST,
    port: 587,
    secure: true,
    auth: {
      user: SMTP_SERVER_USERNAME,
      pass: SMTP_SERVER_PASSWORD,
    },
  });

  try {
    const isVerified = await transporter.verify();
    const info = await transporter.sendMail({
      from: SITE_MAIL_RECIEVER,
      to: email,
      subject: subject,
      html: html ? html : '',
    });
    console.log(info);
    return new Response("Success", { status: 200 });
  } catch (error) {
    console.error('Something Went Wrong', error);
    return new Response("COULD NOT SEND MESSAGE", { status: 500 });
  }

}


export async function sendEmail(toEmail: string, subject: string, body: string) {

  const SMTP_SERVER_SERVICE = process.env.SMTP_SERVER_SERVICE; // gmail
  const SMTP_SERVER_HOST = process.env.SMTP_SERVER_HOST; // smtp.gmail.com
  const SMTP_SERVER_USERNAME = process.env.SMTP_SERVER_USERNAME;
  const SMTP_SERVER_PASSWORD = process.env.SMTP_SERVER_PASSWORD;
  const SITE_MAIL_RECIEVER = process.env.SITE_MAIL_RECIEVER;

  const transporter = NodeMailer.createTransport({
    service: SMTP_SERVER_SERVICE,
    host: SMTP_SERVER_HOST,
    port: 587,
    secure: true,
    auth: {
      user: SMTP_SERVER_USERNAME,
      pass: SMTP_SERVER_PASSWORD,
    },
  });

  try {
    const isVerified = await transporter.verify();
    const info = await transporter.sendMail({
      from: SITE_MAIL_RECIEVER,
      to: toEmail,
      subject: subject,
      html: body,
    });
    console.log(info);
    return true;
  } catch (error) {
    console.error('Something Went Wrong', error);
    return {error: "COULD NOT SEND MESSAGE"};
  }

}