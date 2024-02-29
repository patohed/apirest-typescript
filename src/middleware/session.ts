import { NextFunction, Request, Response } from "express";
import { verifyToken } from "../utils/jwt.handle";
import { JwtPayload } from "jsonwebtoken";
import { RequestExt } from "../interfaces/req-ext";

//** */



const checkJwt = (req: RequestExt, res: Response, next:NextFunction) => {
    try{
        const jwtUser = req.headers.authorization || "";
        const jwt = jwtUser.split(" ").pop();
        const isUser = verifyToken(`${jwt}`) as {id:string};
        console.log(isUser);
        if(!isUser){
            res.status(401)
            res.send("Unauthorized")
        } else {

            req.user = isUser;
            console.log({jwtUser})  
            next(); 
        }
    }
    catch(e){
    res.status(400);
    res.send("INVALID_REQUEST");
}

};

export { checkJwt };