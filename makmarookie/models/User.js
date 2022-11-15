import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
    id: Number,
    type: Number,
    fullName: String
});

module.exports = mongoose.models.User || mongoose.model('User', userSchema);