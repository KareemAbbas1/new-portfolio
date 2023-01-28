import nodemailer from "nodemailer";


export default async function handler(req, res) {
    const { method } = req;

    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: process.env.user,
            pass: process.env.pass
        }
    });

    if (method === "POST") {
        try {
            const emailResponse = await transporter.sendMail({
                from: `<${req.body.email}>`,
                to: process.env.user,
                subject: `${req.body.subject}`,
                html: `
                    <h3>New Message From ${req.body.email}</h3>
                    <p>${req.body.message}</p>
                    <address>
                    Reply: 
                    <a href="mailto:${req.body.email}">
                    ${req.body.email}
                    </a>
                    </address>
                `
            });
            res.status(200).json(res.body);
        }
        catch (error) {
            console.log(error)
            res.status(400).json(res.body);
        }
    }
}
