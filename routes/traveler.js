const express = require('express');
const router = express.Router();

router.get('/signup', (req, res) => {

});

// View Services
router.get('/services', (req, res) => {
    // Implementation here
});

// Filter Services
router.get('/services/filter', (req, res) => {
    // Implementation here
});

// Create Package
router.post('/create/package', (req, res) => {
    // Implementation here
});

// View Packages
router.get('/packages', (req, res) => {
    // Implementation here
});

// View Bookings for Packages
router.get('/packages/:package_id/bookings', (req, res) => {
    // Implementation here
});

// View Bookings for Services
router.get('/services/bookings', (req, res) => {
    // Implementation here
});

// Scan QR Code for Check-In
router.post('/checkin', (req, res) => {
    // Implementation here
});

module.exports = router;
