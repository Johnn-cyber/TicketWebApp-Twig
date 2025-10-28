# 🎟️ TicketApp - Twig Ticket Management System

A modern, lightweight ticket management system built with **PHP**, **Twig**, and **TailwindCSS**.

---

## ✨ Features

- 🧩 **Modular Twig templates** for clean and maintainable structure  
- 🔐 **Simple authentication system** with session handling  
- 📱 **Fully responsive design** built with TailwindCSS  
- 🎨 **Reusable layouts and components** using Twig inheritance  
- ⚙️ **Complete Ticket CRUD operations** (Create, Read, Update, Delete)  
- 📊 **Dashboard with ticket statistics**  
- 💬 **Real-time UI feedback** using JavaScript utilities  

---

## 🧰 Technologies Used

- **Twig** (templating engine)  
- **PHP 8+**  
- **TailwindCSS**  
- **Vanilla JavaScript (ES6)**  
- **Composer** (for dependency management)  

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository
```
git clone https://github.com/your-username/ticketapp-twig.git
cd ticketapp-twig
```
### 2️⃣ Install Dependencies and Start the Server

Install PHP dependencies using Composer and start a local server:
```
composer install
php -S localhost:8000 -t public
```
Your app should now be accessible at http://localhost:8000

📁 Project Structure
ticketapp-twig/
├── public/                 # Public files 
│   ├── index.php
│   ├── css/
│   ├── js/
├── src/                    # Application logic
│   ├── Controllers/
│   └── Helpers/
├── templates/              # All Twig templates
│   ├── layouts/
│   │   └── base.twig
│   ├── pages/
│   │   ├── dashboard.twig
│   │   ├── login.twig
│   │   └── tickets.twig
├── vendor/                 # Composer dependencies (auto-generated)
├── composer.json
├── composer.lock
├── .gitignore
└── README.md
🔑 Authentication

This app includes a basic simulated authentication system using PHP sessions.

Session key: ticketapp_session

Simulated user: stored in localStorage or PHP session (for demo only)

Test Credentials
Email: test@example.com
Password: password123
⚠️ Note: This demo uses a simulated login and is not secure for production.

♿ Accessibility Features

Semantic HTML with Twig templating for structure

ARIA labels where necessary

Keyboard navigation support

Color contrast compliance

Screen-reader-friendly messages

⚠️ Known Issues

Authentication and data persistence are simulated (no database yet)

Page state resets on refresh

Intended for demonstration purposes only

🧩 Future Improvements

Add real database integration (MySQL / SQLite)

Implement user roles and permissions

Add ticket filtering and search

Add comment threads and ticket assignments
