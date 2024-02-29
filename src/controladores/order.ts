import { Request, Response, response } from "express";
import { handleHttp } from "../utils/error.handle"
import { JwtPayload } from "jsonwebtoken";
import { RequestExt } from "../interfaces/req-ext";


//**This must exist in a especific folder example : "Interfaces" */
const getItems = (req: RequestExt, res:Response) => {

    try {
        res.send ( { 
            data: "ESTO ES SOLO PARA UN JWT VALIDO - THIS IS ONLY ALLOWED FOR VALID JWT VALUE'S",
            user:req.user,
        });
    } catch (e) {

       handleHttp(res, 'ERROR_GET_ORDERS')

    }
};

export { getItems };
