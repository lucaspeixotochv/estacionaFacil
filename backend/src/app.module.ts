import { Module } from '@nestjs/common';
import { PrismaService } from './database/prisma.service';
import { CarModule } from './modules/car/car.module';
import { AuthModule } from './modules/auth/auth.module';
import { AuthGuard } from './modules/auth/auth.guard';
import { APP_GUARD } from '@nestjs/core';

@Module({
  imports: [CarModule, AuthModule],
  controllers: [],
  providers: [
    PrismaService,
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
})
export class AppModule {}
