
import express from 'express';
import{showUserLoginPage, loginSucess, showSignupPage, signupSucess} from "../controllers/usersController.js"

const router = express.Router();

router.get("/", showUserLoginPage);
router.post("/", loginSucess);
router.get("/userSignup", showSignupPage)
router.post("/userSignup", signupSucess)

export default router;
