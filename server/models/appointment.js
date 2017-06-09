const mongoose = require("mongoose")

const AppointmentSchema = mongoose.Schema({
    date: {
        type: Date,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    complaint: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

mongoose.model("Appointment", AppointmentSchema)
