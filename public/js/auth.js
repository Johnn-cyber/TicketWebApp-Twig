const Auth = {
    login(token) {
        localStorage.setItem('ticketapp_session', token);
    },
    
    logout() {
        localStorage.removeItem('ticketapp_session');
        showToast('Logged out successfully!', 'success');
        navigateTo('landing');
    },
    
    isAuthenticated() {
        return !!localStorage.getItem('ticketapp_session');
    },
    
    getToken() {
        return localStorage.getItem('ticketapp_session');
    }
};