import express from "express"
import { logIn, logOut, register } from "../controllers/authController.js";

const router = express.Router();


router.post("/register",register)
router.post("/logIn",logIn)
router.post("/logOut",logOut)


export default router;