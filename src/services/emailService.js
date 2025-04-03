export const sendContactEmail = async (formData) => {
    try {
        const response = await fetch('http://localhost:3001/api/send-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error || 'Failed to send email');
        }

        return { success: true };
    } catch (error) {
        throw new Error(error.message);
    }
}; 