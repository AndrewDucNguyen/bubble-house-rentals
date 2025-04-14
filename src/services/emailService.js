export const sendContactEmail = async (formData) => {
    try {
        const apiUrl = import.meta.env.DEV
            ? 'http://localhost:3001/api/send-email'
            : `${window.location.origin}/api/send-email`;

        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(formData),
            credentials: 'same-origin'
        });

        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error('Email service error:', error.message);
        throw error;
    }
}; 