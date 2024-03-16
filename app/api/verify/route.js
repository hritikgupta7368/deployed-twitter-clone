import { NextResponse } from "next/server";
import nodemailer from 'nodemailer';


let CODE
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'temporary8637@gmail.com',
      pass: 'daelpjknwbyujiwg'
    }
  });

const generateVerificationCode = () => Math.floor(100000 + Math.random() * 900000);

const sendVerificationEmail = async (recipientEmail, verificationCode) => {
    try {
      await transporter.sendMail({
        from: 'temporary8637@gmail.com',
        to: recipientEmail,
        subject: 'Email Verification',
        html: `<p>Your verification code is: <strong>${verificationCode}</strong></p>`
      });
    } catch (error) {
      throw new Error('Failed to send verification email');
    }
  };


async function generateMail(email){
    const verificationCode = generateVerificationCode();
    CODE = verificationCode
    try {
      await sendVerificationEmail(email, CODE);
      return verificationCode;
  } catch (error) {
      throw error;
  }
}




export async function POST(request) {
 
  try {
    const formData = await request.json();
    const { action } = formData;
    if (action === 'send') {
        const { email } = formData;
        if (email.length > 0) {
            const res = await generateMail(email);
            console.log(`Mail sent to ${email}!`);
            return NextResponse.json({ message: "sent" });
        } else {
            throw new Error('Email is empty');
        }
    } else if (action === 'verify') {
        const { code } = formData;
        if (code.length > 0 && CODE !== null && parseInt(code) === CODE) {
            return NextResponse.json({ message: "code matched" });
        } else {
            return NextResponse.json({ error: "Invalid code" });
        }
    } else {
        return NextResponse.json({ error: "Invalid action" });
    }
} catch (error) {
    console.error("Error handling request:", error);
    return NextResponse.json({ message: "error" });
}
}