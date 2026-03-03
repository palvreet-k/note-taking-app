import mongoose from 'mongoose';

const notesSchema = new mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String},
    date: {type: Date, default: Date.now},
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
});
export default mongoose.model('Note', notesSchema)