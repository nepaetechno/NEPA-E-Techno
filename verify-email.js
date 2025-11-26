async function verifyEmail() {
    try {
        const response = await fetch('http://localhost:3000/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: 'Test User',
                email: 'test@example.com',
                message: 'This is a test message from verification script',
            }),
        });

        if (response.ok) {
            console.log('Email sent successfully');
        } else {
            console.error('Failed to send email:', await response.text());
        }
    } catch (error) {
        console.error('Error:', error);
    }
}

verifyEmail();
