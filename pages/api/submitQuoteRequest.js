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
                from: `<${req.body.clientEmail}>`,
                to: process.env.user,
                subject: `${req.body.subject}`,
                html: `
                    <h3>Quote Request From ${req.body.clientEmail}</h3>
                    <h4>Project Type: ${req.body.projectType}</h4>
                    <div style="
                        display:flex;
                        align-items:center;
                        justify-content:sapce-between;
                        border-bottom:1px solid #000;               
                    ">
                        <p>Start Date: ${req.body.startDate}</p>
                        <pre>         </pre>
                        <p>End Date: ${req.body.endDate}</p>
                    </div>
                    <h4>Project Description:</h4>
                    <p style="border-bottom:1px solid #000">${req.body.description}</p>
                    ${req.body.items[0] !== ""
                        ? `
                        <h4>Items:</h4>
                        ${req.body.items.map(item => `<p>${item}</p>`)}
                        `
                        : `<p>No Items specified</p>`
                    }
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