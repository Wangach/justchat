const {mongoose, Schema} = require('mongoose');
const userSchema = new Schema({
    name: String,
    email: String,
    password: String,
    date: { type: Date, default: Date.now }
})

module.exports = mongoose.model('chat', userSchema);