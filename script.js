// Log ready status
document.addEventListener('DOMContentLoaded', () => {
    console.log('AR Exhibition Ready');

    const modelViewers = document.querySelectorAll('model-viewer');
    
    modelViewers.forEach((mv) => {
        mv.addEventListener('error', (error) => {
            console.error('Error loading model:', error);
            // Optional: fallback UI could go here
        });

        // Listen for AR status changes if needed
        mv.addEventListener('ar-status', (event) => {
            console.log('AR Status:', event.detail.status);
        });
    });
});
