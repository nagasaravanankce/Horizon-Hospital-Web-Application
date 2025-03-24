// server.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect("mongodb://localhost:27017/hospitalDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Schema
const AppointmentSchema = new mongoose.Schema({
  name: String,
  phone: String,
  email: String,
  date: String,
  department: String,
});

const Appointment = mongoose.model("Appointment", AppointmentSchema);

// Route to create appointment
app.post("/api/appointments", async (req, res) => {
  try {
    const appointment = new Appointment(req.body);
    await appointment.save();
    res.status(201).json({ message: "Appointment added!" });
  } catch (err) {
    res.status(500).json({ message: "Error saving appointment." });
  }
});

// Route to get all appointments (for Doctor/Admin pages)
app.get("/api/appointments", async (req, res) => {
  const appointments = await Appointment.find();
  res.json(appointments);
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
