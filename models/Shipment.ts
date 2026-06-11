// import mongoose from 'mongoose';

// const ShipmentSchema = new mongoose.Schema({
//   trackingId: { 
//     type: String, 
//     required: true, 
//     unique: true 
//   },
//   senderName: { type: String },
//   pickupLocation: { type: String },
//   dropoffLocation: { type: String },
//   status: { 
//     type: String, 
//     enum: ['Picked Up', 'In Hub', 'In Transit', 'Delivered'],
//     default: 'Picked Up'
//   },
//   currentLocation: { type: String },
//   updatedAt: { type: Date, default: Date.now }
// });

// // This prevents Mongoose from creating the model twice during Next.js hot reloads
// const Shipment = mongoose.models.Shipment || mongoose.model('Shipment', ShipmentSchema);

// export default Shipment;