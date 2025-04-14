import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
    // Set CORS headers
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
    res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
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
            console.error('Resend error:', error);
            return res.status(500).json({ error: error.message });
        }

        return res.status(200).json({ success: true });
    } catch (error) {
        console.error('Server error:', error);
        return res.status(500).json({ error: error.message });
    }
} 