
import express from 'express';
import {ensureAuthenticated} from "../server.js"
import { showAllNotes, showNewNoteForm, addNoteSuccess, showEditNoteForm, editNoteSucess, deleteNote} from "../controllers/notesController.js"

const router = express.Router({mergeParams: true});

router.get("/", ensureAuthenticated, showAllNotes)
router.get("/addNote", ensureAuthenticated, showNewNoteForm)
router.post("/addNote", ensureAuthenticated, addNoteSuccess)
router.get("/editNote/:id", ensureAuthenticated, showEditNoteForm)
router.put("/editNote/:id", ensureAuthenticated, editNoteSucess)
router.delete("/deleteNote/:id", ensureAuthenticated, deleteNote)

export default router;

