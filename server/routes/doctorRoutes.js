const express = require('express');
const router = express.Router();
const Doctor = require('../models/Doctor');

// Get all doctors
router.get('/doctors', async (req, res) => {
    const doctors = await Doctor.find();
    res.json(doctors);
});

// Add new doctor
router.post('/doctors', async (req, res) => {
    const { name, specialty, image } = req.body;
    const newDoctor = new Doctor({ name, specialty, image });
    await newDoctor.save();
    res.json(newDoctor);
});

// Delete doctor by ID
router.delete('/doctors/:id', async (req, res) => {
    const { id } = req.params;
    await Doctor.findByIdAndDelete(id);
    res.json({ message: 'Doctor deleted' });
});

module.exports = router;  // 👈 This is important!
