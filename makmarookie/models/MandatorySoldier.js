import mongoose, { Schema } from "mongoose";

const MandatorySoldierSchema = new Schema({
    id: Number,
    type: Number,
    fullName: String,
    recruitDate: Date,
    arrivalDate: Date
});

export const model = mongoose?.models?.MandatorySoldier || mongoose.model('MandatorySoldier', MandatorySoldierSchema);