import express from 'express';
import cors from 'cors';
import { Resend } from 'resend';
import dotenv from 'dotenv';

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

        const { error } = await resend.emails.send({
            from: `The Bubble House Rentals <${process.env.SENDER_EMAIL}>`,
            to: `${formData.email}`,
            subject: `${formData.firstName} ${formData.lastName} - Rental Inquiry`,
            html: `
                <h2>New Rental Form Submission</h2>
                <h3>Personal Information</h3>
                <p><strong>Name:</strong> ${formData.firstName} ${formData.lastName}</p>
                <p><strong>Email:</strong> ${formData.email}</p>
                <p><strong>Phone:</strong> ${formData.number}</p>
                
                <h3>Event Information</h3>
                <p><strong>Event Date:</strong> ${new Date(formData.eventDate).toLocaleDateString()}</p>
                <p><strong>Setup Time:</strong> ${formData.setupTime}</p>
                <p><strong>Pickup Time:</strong> ${formData.pickupTime}</p>
                <p><strong>Items Interested:</strong> ${formData.itemsInterested.join(', ')}</p>
                <p><strong>Event Type:</strong> ${formData.eventType}</p>
                <p><strong>Surface Type:</strong> ${formData.surfaceType}</p>
                <p><strong>Power Available:</strong> ${formData.powerAvailable}</p>
                <p><strong>Pets:</strong> ${formData.petStatus}</p>
                <p><strong>Event Location:</strong> ${formData.eventLocation}</p>
                <p><strong>Preferred Contact:</strong> ${formData.preferredContact}</p>
                
                <h3>Location</h3>
                <p>${formData.street}</p>
                <p>${formData.city}, ${formData.state} ${formData.postal}</p>
                
                <h3>Additional Information</h3>
                <p><strong>Additional Notes:</strong> ${formData.additionalNotes || 'N/A'}</p>
            `
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