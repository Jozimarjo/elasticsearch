import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log(
      `Request received: ${req.method} ${
        req.url === '/' ? req.baseUrl : req.url
      } ${JSON.stringify(req.body || {})}`,
    );
    next();
  }
}
