import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
  StreamableFile,
} from '@nestjs/common';
import { type } from 'ramda';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Response<T> {
  statusCode: number;
  data?: T;
}

@Injectable()
export class TransformInterceptor<T> implements NestInterceptor<T, Response<T>> {
  intercept(context: ExecutionContext, next: CallHandler): Observable<Response<T> | any> {
    const request = context.switchToHttp().getRequest();
    return next.handle().pipe(
      map((data?: any) => {
        if (data instanceof StreamableFile) {
          return data;
        }

        const response = context.switchToHttp().getResponse();
        const requestId = request.requestId;

        if ([undefined].includes(data)) {
          response.status(204);
          return;
        } else if (data === null) {
          response.status(404);
          return;
        }

        return {
          requestId,
          data,
          statusCode: context.switchToHttp().getResponse().statusCode,
          type: type(data),
        };
      }),
    );
  }
}
