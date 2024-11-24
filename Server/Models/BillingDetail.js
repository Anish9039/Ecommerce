const mongoose = require('mongoose');

const billingDetailSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  companyName: { type: String },
  streetAddress: { type: String, required: true },
  apartment: { type: String },
  city: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  saveInfo: { type: Boolean, default: false },
  orderId: { type: String, required: true }, // Add orderId field
});

const BillingDetail = mongoose.model('BillingDetail', billingDetailSchema);

module.exports = BillingDetail;
