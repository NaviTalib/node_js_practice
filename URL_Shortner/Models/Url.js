import mongoose from "mongoose";

const urlSchema = new mongoose.Schema({
    longUrl: {  // ✅ Correct field name
        type: String,
        required: true
    },
    shortCode: {  // ✅ Correct field name
        type: String,
        required: true
    }
});

export const Url = mongoose.model('shortUrl', urlSchema);
