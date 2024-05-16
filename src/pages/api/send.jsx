// api/send.js

import EmailTemplate from '../../app/components/EmailTemplate';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            // Parse request body
            const { name, email, message } = req.body;
            console.log("data coming from the client ==>", name, email, message);

            // Send email
            const { data, error } = await resend.emails.send({
                from: '"Elite" <info@eliteae.net>',
                to: 'info@eliteae.net',
                subject: 'Message from your website',
                react: EmailTemplate({ name, email, message }),
            });

            // Handle email sending result
            if (error) {
                console.error('Error sending email:', error);
                return res.status(500).json({ error: 'Error sending email' });
            }

            // Respond with success
            return res.status(200).json({ success: true });
        } catch (err) {
            console.error('Error processing request:', err);
            return res.status(500).json({ error: 'Internal server error' });
        }
    } else {
        // Handle other HTTP methods
        return res.status(405).end(); // Method Not Allowed
    }
}
