const TicketManager = {
    STORAGE_KEY: 'ticketapp_tickets',
    
    getTickets() {
        const tickets = localStorage.getItem(this.STORAGE_KEY);
        if (!tickets) {
            const defaultTickets = [
                {
                    id: '1',
                    title: 'Server Down Issue',
                    description: 'Production server is not responding to requests',
                    status: 'open',
                    createdAt: new Date(Date.now() - 3600000).toISOString(),
                },
                {
                    id: '2',
                    title: 'Login Page Bug',
                    description: 'Users unable to log in using social auth',
                    status: 'in_progress',
                    createdAt: new Date(Date.now() - 7200000).toISOString(),
                },
            ];
            this.saveTickets(defaultTickets);
            return defaultTickets;
        }
        return JSON.parse(tickets);
    },
    
    saveTickets(tickets) {
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(tickets));
    },
    
    createTicket(ticketData) {
        const tickets = this.getTickets();
        const newTicket = {
            ...ticketData,
            id: Math.random().toString(36).substr(2, 9),
            createdAt: new Date().toISOString(),
        };
        tickets.push(newTicket);
        this.saveTickets(tickets);
        return newTicket;
    },
    
    updateTicket(id, updates) {
        const tickets = this.getTickets();
        const index = tickets.findIndex(t => t.id === id);
        if (index !== -1) {
            tickets[index] = { ...tickets[index], ...updates };
            this.saveTickets(tickets);
        }
    },
    
    deleteTicket(id) {
        const tickets = this.getTickets();
        const filtered = tickets.filter(t => t.id !== id);
        this.saveTickets(filtered);
    }
};