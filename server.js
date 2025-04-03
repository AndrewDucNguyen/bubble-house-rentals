import express from 'express';
import cors from 'cors';
import { Resend } from 'resend';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

const resend = new Resend(process.env.RESEND_API_KEY);

app.post('/api/send-email', async (req, res) => {
    try {
        const formData = req.body;

        const { data, error } = await resend.emails.send({
            from: 'Bubble House Rentals <onboarding@resend.dev>',
            to: ['anguyen0615@gmail.com'],
            subject: 'New Contact Form Submission',
            html: `
                <h2>New Contact Form Submission</h2>
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
                
                <h3>Location</h3>
                <p>${formData.street}</p>
                <p>${formData.city}, ${formData.state} ${formData.postal}</p>
                
                <h3>Additional Information</h3>
                <p><strong>Preferred Contact:</strong> ${formData.preferredContact}</p>
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

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
}); 