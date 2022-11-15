import mongoose, { Schema } from "mongoose";

const mandatorySoldierSchema = new Schema({
    id: Number,
    type: Number,
    fullName: String,
    recruitDate: Date,
    arrivalDate: Date
});

module.exports = mongoose.models.MandatorySoldier || mongoose.model('MandatorySoldier', mandatorySoldierSchema);