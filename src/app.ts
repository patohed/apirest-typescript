import "dotenv/config";
import express from "express";
import cors from "cors";
import { router } from "./routes";
import db from "./config/mongo";
import { loginCtrl, registerCtrl } from "./controladores/auth";
import { getItems } from "./controladores/order";
import { checkJwt } from "./middleware/session";
import { getFile } from "./controladores/upload";
import multerMiddleware from "./middleware/file";


const PORT = process.env.PORT || 3001;
const app  = express();

app.use(cors());
app.use(express.json());
app.post('/auth/register', registerCtrl);
app.post('/auth/login', loginCtrl);
app.get('/order', checkJwt, getItems);
app.post('/upload', checkJwt,multerMiddleware.single("myfile"), getFile);

app.use(router);


db().then(()=>console.log("connection established"));

app.listen(PORT, () => {
    console.log(`Listo por el puerto ${PORT}`)
});



