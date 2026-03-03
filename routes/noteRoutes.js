
import express from 'express';
import { showAllNotes, showNewNoteForm, addNoteSuccess, showEditNoteForm, editNoteSucess, deleteNote} from "../controllers/notesController.js"

const router = express.Router({mergeParams: true});

router.get("/", showAllNotes)
router.get("/addNote", showNewNoteForm)
router.post("/addNote", addNoteSuccess)
router.get("/editNote/:id", showEditNoteForm)
router.post("/editNote/:id", editNoteSucess)
router.post("/deleteNote/:id", deleteNote)

export default router;

