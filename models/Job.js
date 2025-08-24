const mongoose = require("mongoose");
const jobSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    company: String,
    position: String,
    status: String,
    deadline: Date,
    notes:String
});
module.exports = mongoose.model('Job', jobSchema);
