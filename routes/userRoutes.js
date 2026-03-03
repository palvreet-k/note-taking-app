
import express from 'express';
import {showUserLoginPage, loginUser, logoutUser, loginFailed, showSignupPage, signupSucess} from "../controllers/usersController.js"

const router = express.Router();

router.get("/", showUserLoginPage);
router.get("/login", showUserLoginPage);
router.post("/login", loginUser);
router.get("/logout", logoutUser);
router.get("/crash", loginFailed)
router.get("/userSignup", showSignupPage)
router.post("/userSignup", signupSucess)

export default router;
