function navigateTo(page) {
    // Check authentication for protected pages
    const protectedPages = ['dashboard', 'tickets'];
    
    if (protectedPages.includes(page) && !Auth.isAuthenticated()) {
        showToast('Please log in to access this page', 'error');
        page = 'login';
    }
    
    // Redirect logged-in users away from auth pages
    if ((page === 'login' || page === 'signup') && Auth.isAuthenticated()) {
        page = 'dashboard';
    }
    
    // Get the base path (handles both localhost/ticketapp-twig/public/ and root)
    const basePath = window.location.pathname.replace(/\/[^\/]*$/, '');
    window.location.href = `${basePath}/index.php?page=${page}`;
}

function showToast(message, type = 'success') {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    
    const bgColor = type === 'success' ? 'bg-green-500' : 'bg-red-500';
    
    toast.className = `${bgColor} text-white px-6 py-3 rounded-lg shadow-lg transition-all transform translate-x-0`;
    toast.textContent = message;
    
    container.appendChild(toast);
    
    // Animate in
    setTimeout(() => {
        toast.style.transform = 'translateX(0)';
    }, 10);
    
    // Remove after 3 seconds
    setTimeout(() => {
        toast.style.transform = 'translateX(400px)';
        setTimeout(() => {
            container.removeChild(toast);
        }, 300);
    }, 3000);
}

// Check authentication on protected pages
document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const page = urlParams.get('page') || 'landing';
    const protectedPages = ['dashboard', 'tickets'];
    
    if (protectedPages.includes(page) && !Auth.isAuthenticated()) {
        showToast('Please log in to access this page', 'error');
        setTimeout(() => {
            navigateTo('login');
        }, 1000);
    }

});
window.navigateTo = navigateTo;
