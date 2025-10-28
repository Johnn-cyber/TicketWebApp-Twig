<?php
require_once __DIR__ . '/../vendor/autoload.php';

use Twig\Loader\FilesystemLoader;
use Twig\Environment;

// Initialize Twig
$loader = new FilesystemLoader(__DIR__ . '/../templates');
$twig = new Environment($loader, [
    'cache' => false, // Disable cache for development
    'debug' => true,
]);

// Add global variables
$twig->addGlobal('base_url', dirname($_SERVER['SCRIPT_NAME']));

// Get the page from URL or default to landing
$page = $_GET['page'] ?? 'landing';

// Map of valid pages
$validPages = [
    'landing' => 'pages/landing.twig',
    'login' => 'pages/login.twig',
    'signup' => 'pages/signup.twig',
    'dashboard' => 'pages/dashboard.twig',
    'tickets' => 'pages/tickets.twig',
];

// Check if page is valid
$template = $validPages[$page] ?? 'pages/landing.twig';

// Render the template
try {
    echo $twig->render($template);
} catch (Exception $e) {
    echo "Error loading page: " . $e->getMessage();
}