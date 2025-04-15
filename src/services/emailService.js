export const sendContactEmail = async (formData) => {
    try {
        // In production, the API route should be /api/send-email
        // In development, we need to use the full URL with port
        const apiUrl = import.meta.env.DEV
            ? 'http://localhost:3001/api/send-email'
            : '/api/send-email';

        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(formData),
            credentials: 'same-origin'
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.error || 'Failed to send email');
        }

        return data;
    } catch (error) {
        // Ensure we always throw a string error message
        const errorMessage = error.message || 'An unexpected error occurred';
        throw new Error(errorMessage);
    }
}; 