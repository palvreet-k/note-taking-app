
import { showAllNotes, addNewNote, showEditNoteForm, deleteNote} from "../controllers/notes"

const router = express.Router();

router.get("/notes", showAllNotes)
router.post("/notes", addNewNote)
router.get("/notes/editNote/:id", showEditNoteForm)
router.post("/notes/editNote/:id", editNote)
router.post("/notes/deleteNote/:id", deleteNote)

export default router;

