import mongoose, { Schema } from "mongoose";

const taskSchema = new Schema({
    id: Number,
    name: String,
    description: String
});

module.exports = mongoose.models.Task || mongoose.model('Task', taskSchema);