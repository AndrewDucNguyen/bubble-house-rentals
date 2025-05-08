import express from 'express';
import cors from 'cors';
import { Resend } from 'resend';
import dotenv from 'dotenv';
import RentalInquiryEmail from './src/emails/RentalInquiryEmail.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

// Configure CORS with specific options
app.use(cors({
    origin: process.env.NODE_ENV === 'production'
        ? process.env.VERCEL_URL || 'https://your-production-domain.com'
        : 'http://localhost:5173',
    credentials: true
}));

// Add body parser middleware with size limit
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

// Add error handling middleware
app.use((err, req, res, next) => {
    console.error('Error in request:', err);
    res.status(500).json({ error: err.message });
});

const resend = new Resend(process.env.RESEND_API_KEY);

app.post('/api/send-email', async (req, res) => {
    try {
        console.log('Received request body:', req.body);

        if (!req.body || Object.keys(req.body).length === 0) {
            console.log('Empty request body received');
            return res.status(400).json({ error: 'Request body is empty' });
        }

        const formData = req.body;
        const emailTemplate = RentalInquiryEmail(formData);

        const { error } = await resend.emails.send({
            from: `The Bubble House Rentals <${process.env.SENDER_EMAIL}>`,
            to: `${formData.email}`,
            bcc: process.env.BCC_EMAIL,
            subject: `${formData.firstName} ${formData.lastName} - Rental Inquiry`,
            html: emailTemplate.html
        });

        if (error) {
            return res.status(500).json({ error: error.message });
        }

        res.json({ success: true });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Only start the server if not running on Vercel
if (process.env.NODE_ENV !== 'production') {
    app.listen(port, () => {
        console.log(`Server running on port ${port}`);
    });
}

export default app;