import { NextFunction, Request, Response } from "express";

const logMiddleWare = (req:Request, res:Response, next: NextFunction ) => {
    const header = req.headers;
    const userAgent = header["user-agent"];
    console.log("User-Agent", userAgent);
    next();
};

export { logMiddleWare };