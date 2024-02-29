import { Router } from "express";
import { getItems } from "../controladores/order";
import { checkJwt } from "../middleware/session";
//**Esta ruta solo es privada para sesiones activas - Actives sessions only */
//**JWT Valid */
const router = Router();

router.get("/order", checkJwt ,getItems);

export { router };
