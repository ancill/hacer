import { Express, NextFunction, Request, Response } from "express";

export const createLogMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.on("finish", function () {
    console.log(
      req.method,
      decodeURI(req.url),
      res.statusCode,
      res.statusMessage
    );
  });
  next();
};

export const nameInjectionMiddleware =
  ({ name }: { name: string }) =>
  (req: Request, res: Response, next: NextFunction) => {
    res.locals.name = name;
    next();
  };
