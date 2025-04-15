export const sendContactEmail = async (formData) => {
    try {
        const response = await fetch('http://localhost:3001/api/send-email', {
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