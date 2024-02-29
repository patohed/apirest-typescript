import { Router, Request, Response } from "express";
import { registerCtrl, loginCtrl} from "../controladores/auth";

//**http://localhost:3002/auth/register POST*/

const router = Router();

router.post("/register", registerCtrl);
router.post("/login", loginCtrl);

export { router };