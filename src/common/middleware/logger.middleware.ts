// import { Injectable, NestMiddleware } from "@nestjs/common";
import { Request, Response, NextFunction } from "express";

// @Injectable()
// export class LoggerMiddleWare implements NestMiddleware{
//     use(req: Request, res: Response, next: NextFunction) {
//         console.log('Request');
//         next();
//     }
// }

export function logger(req: Request, res: Response, next: NextFunction){
    console.log('Logger first message');
    //console.log(`Request is ${req.accepted}\n Response is ${res.charset}\n Next is ${next.arguments}`);
    next();
};