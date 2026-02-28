
import{showUserLoginPage, loginSucess, showSignupPage, signupSucess} from "../controllers/users"

const router = express.Router();

router.get("/", showUserLoginPage);
router.post("/", loginSucess);
router.get("/user/signup", showSignupPage)
router.post("/user/signup", signupSucess)

export default router;
