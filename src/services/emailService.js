export const sendContactEmail = async (formData) => {
    try {
        const apiUrl = process.env.NODE_ENV === 'production'
            ? '/api/send-email'  // Vercel will handle the routing
            : 'http://localhost:3001/api/send-email';

        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(formData),
            credentials: 'include'
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.error || `HTTP error! status: ${response.status}`);
        }

        return data;
    } catch (error) {
        throw new Error(error.message || 'An unexpected error occurred while sending the email');
    }
}; 