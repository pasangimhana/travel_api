const express = require('express');
const serviceProviderController = require('../controllers/serviceProviderController');
const router = express.Router();
const { signUp } = require('../controllers/serviceProviderController');


// Sign up as Service Provider
router.post('/signup', (req, res) => {
// run the controller function
    serviceProviderController.signUp(req, res);
});

// Add Accommodation
router.post('/create/accommodation', (req, res) => {


    res.send('Add Accommodation');
});

// Add Adventure
router.post('/create/adventure', (req, res) => {
 // Implementation here
    res.send('Add Adventure');
});

// Add Transportation
router.post('/create/transportation', (req, res) => {
    // Implementation here
    res.send('Add Transportation');
});

// View Services
router.get('/services', (req, res) => {
    // Implementation here
    res.send('View Services');
});

// View Bookings for Services
router.get('/services/:service_id/bookings', (req, res) => {
    // Implementation here
    res.send('View Bookings for Services');
});

// Update Service
router.put('/services/:service_id', (req, res) => {
    // Implementation here
    res.send('Update Service');
});

// Delete Service
router.delete('/services/:service_id', (req, res) => {
    // Implementation here
    res.send('Delete Service');
});

// Service Provider Dashboard Stats
router.get('/dashboard/stats', (req, res) => {
    // Implementation here
    res.send('Service Provider Dashboard Stats');
});

// Get all bookings
router.get('/bookings', (req, res) => {
    // Implementation here
    res.send('Get all bookings');
});

module.exports = router;
