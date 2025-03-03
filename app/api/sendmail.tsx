'use server';

import NodeMailer from "nodemailer";

import type { NextRequest, NextResponse } from 'next/server'
 
type ResponseData = { message: string };
 
export async function GET( req: NextRequest, res: NextResponse<ResponseData>) {
  console.log({req, res});
  return new Response("Success GET API!");
}

// eslint-disable-next-line  @typescript-eslint/no-explicit-any
export async function sendEmail(toEmail: string, subject: string, body: string) :Promise<any>{

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
    console.log({isVerified, info});
    return true;
  } catch (error) {
    console.error('Something Went Wrong', error);
    return {error: "COULD NOT SEND MESSAGE"};
  }

}