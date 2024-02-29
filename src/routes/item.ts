import { Router, Request, Response } from "express";
import { getItems, postItem, deleteItem, getItem, updateItem } from "../controladores/item";
import { logMiddleWare } from "../middleware/log";

const router = Router();


/**
 * http://localhost:3001/item [GET]
 */

router.get("/item", getItems); 

router.get("/item/:id", logMiddleWare, getItem);  

router.post("/item", postItem); 

router.put("/item/:id", updateItem); 

router.delete("/item/:id", deleteItem);

export { router };