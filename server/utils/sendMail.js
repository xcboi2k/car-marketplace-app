import { createTransport } from 'nodemailer'

export const sendMail = async(email, subject, message) => {
    const transport = createTransport({
        host: "sandbox.smtp.mailtrap.io",
        port: 2525,
        auth: {
            user: "d87de77b1d9360",
            pass:"309b7648606d64",
        }
    });

    await transport.sendMail({
        from: 'nipponauto@gmail.com',
        to: email,
        subject: subject,
        message: message,
    })
};