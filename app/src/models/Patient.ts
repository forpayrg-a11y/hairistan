import mongoose from 'mongoose';

const PatientSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: [true, 'Please provide a name.'],
    },
    email: {
        type: String,
        required: [true, 'Please provide an email.'],
    },
    phone: {
        type: String,
        required: [true, 'Please provide a phone number.'],
    },
    serviceType: {
        type: String,
        enum: ['FUE', 'DHI', 'Beard'], // Types of hair transplant (saç ekimi)
        default: 'FUE',
    },
    status: {
        type: String,
        enum: ['Pending', 'Contacted', 'Completed'],
        default: 'Pending',
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

// This line is important for Next.js to prevent re-creating the model
export default mongoose.models.Patient || mongoose.model('Patient', PatientSchema);