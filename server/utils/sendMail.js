import { createTransport } from 'nodemailer'

export const sendMail = async(email, subject, message) => {
    const transport = createTransport({
        host: process.env.MAIL_HOST,
        port: process.env.MAIL_PORT,
        auth: {
            user: process.env.MAIL_USER,
            password: process.env.MAIL_PASSWORD,
        }
    });

    await transport.sendMail({
        from: 'NipponAuto',
        to: email,
        subject,
        message,
    })
};