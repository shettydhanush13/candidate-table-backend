const mongoose = require("mongoose")
const schema = mongoose.Schema

const taskSchema = new schema({
    rowId : String,
    name : String,
    email : String,
    appointment_date : Date,
    move_forward : String,
    interview_transcription : String,
    action_result : String
});

module.exports = mongoose.model('task', taskSchema)
