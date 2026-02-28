import mongoose from mongoose;

const notesSchema = new mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String},
    date: {type: date, default: Date.now}
});
export default mongoose.model('Note', notesSchema)