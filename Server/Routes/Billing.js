const express = require('express');
const router = express.Router();
const BillingDetail = require('../Models/BillingDetail');

// POST route to save billing details
router.post('/', async (req, res) => {  // Change this to just '/'
    const { firstName, companyName, streetAddress, apartment, city, phone, email, saveInfo } = req.body;
  
    try {
      // Validate input
      if (!firstName || !streetAddress || !city || !phone || !email) {
        return res.status(400).json({ error: 'All required fields must be filled.' });
      }
  
      // Create and save a new billing detail
      const billingDetail = new BillingDetail({
        firstName,
        companyName,
        streetAddress,
        apartment,
        city,
        phone,
        email,
        saveInfo,
        orderId: `ORD-${Date.now()}`, // Generate a simple order ID
      });

      // Save the billing details with order ID
      await billingDetail.save();
      res.status(201).json({
        message: 'Billing details saved successfully',
        data: billingDetail,
        orderId: billingDetail.orderId, // Return the order ID
      });
    } catch (error) {
      console.error('Error saving billing details:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;  // Ensure you're exporting the router correctly
