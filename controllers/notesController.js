import Note from "../models/note.js"
import User from "../models/user.js";

export const showAllNotes = async(req, res)=>{
    // console.log("Url params: ", req.params);
    // console.log("Passport params: ", req.user);
    const userId = req.user._id.toString();
    const notes = await Note.find({userId: userId}).sort({ date: -1 });
    const user = await User.findById(userId);
    res.render('notes/allNotes', {notes, user});
}

export const showNewNoteForm = async(req,res)=>{
    const userId = req.user._id.toString();
    const user = await User.findById(userId);
    res.render('notes/addNote', {user})
}

export const addNoteSuccess = async(req,res)=>{
    const userId = req.user._id.toString();
    await Note.create({
        title: req.body.title,
        content: req.body.content,
        userId: userId
    })
    res.redirect("/notes")
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
    res.redirect("/notes");
}

export const deleteNote = async(req, res)=> {
    const noteToDelete  = await Note.findByIdAndDelete({_id: req.params.id});
    res.redirect("/notes");
}


