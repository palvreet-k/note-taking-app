import Note from "../models/note.js"
import User from "../models/user.js";

export const showAllNotes = async(req, res)=>{
    const userId = req.params.userId;
    const notes = await Note.find({userId: userId}).sort({ date: -1 });
    const user = await User.findById(userId);
    res.render('notes/allNotes', {notes, user});
}

export const showNewNoteForm = (req,res)=>{
    const user = {_id: req.params.userId};
    res.render('notes/addNote', {user})
}

export const addNoteSuccess = async(req,res)=>{
    const userId = req.params.userId;
    await Note.create({
        title: req.body.title,
        content: req.body.content,
        userId: userId
    })
    res.redirect(`/users/${userId}/notes/`)
}

export const showEditNoteForm = async(req,res)=> {
    const note = await Note.findById(req.params.id);
    res.render('notes/editNote', {note})
}

export const editNoteSucess = async(req, res)=> {
    const notes = await Note.findByIdAndUpdate({_id: req.params.id},{
        title: req.body.title,
        content:req.body.content
    });
    res.redirect(`/users/${req.params.userId}/notes`);
}

export const deleteNote = async(req, res)=> {
    const noteToDelete  = await Note.findByIdAndDelete({_id: req.params.id});
    res.redirect(`/users/${req.params.userId}/notes`);
}


