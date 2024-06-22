import {
  ExecutionContext,
  createParamDecorator,
  UnauthorizedException,
} from '@nestjs/common';

export const CurrentUserId = createParamDecorator<undefined>(
  (data, context: ExecutionContext) => {
    const request = context.switchToHttp().getRequest();
    const userId = request['userId'];

    if (!userId) {
      return new UnauthorizedException();
    }

    return userId;
  },
);
