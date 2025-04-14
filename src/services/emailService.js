export const sendContactEmail = async (formData) => {
    try {
        const response = await fetch('/api/send-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(formData),
        });

        let data;
        try {
            data = await response.json();
        } catch (parseError) {
            console.error('Failed to parse JSON response:', parseError);
            throw new Error('Invalid server response');
        }

        if (!response.ok) {
            const errorMessage = data.error
                ? (typeof data.error === 'object'
                    ? JSON.stringify(data.error)
                    : data.error)
                : 'Failed to send email';
            console.error('Server error:', errorMessage);
            throw new Error(errorMessage);
        }

        return data;
    } catch (error) {
        console.error('Email service error:', {
            name: error.name,
            message: error.message,
            stack: error.stack
        });
        throw error;
    }
}; 