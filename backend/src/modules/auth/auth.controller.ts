import { Controller, Post, Body, Get, Put } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignupDto } from './dto/signup.dto';
import { SigninDto } from './dto/update-auth.dto';
import { IsPublic } from 'src/shared/decorators/public.decorator';
import { CurrentUserId } from 'src/shared/decorators/currentUserId.decorator';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  @IsPublic()
  signup(@Body() signupDto: SignupDto) {
    return this.authService.signup(signupDto);
  }

  @Post('signin')
  @IsPublic()
  signin(@Body() signinDto: SigninDto) {
    return this.authService.signin(signinDto);
  }

  @Get('user')
  user(@CurrentUserId() userId: string) {
    return this.authService.user(userId);
  }

  @Put('user')
  updateUser(@CurrentUserId() userId: string, @Body() user: any) {
    return this.authService.updateUser(userId, user);
  }
}
