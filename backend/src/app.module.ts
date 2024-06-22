import { Module } from '@nestjs/common';
import { PrismaService } from './database/prisma.service';
import { CarModule } from './modules/car/car.module';
import { AuthModule } from './modules/auth/auth.module';
import { AuthGuard } from './modules/auth/auth.guard';
import { APP_GUARD } from '@nestjs/core';
import { ReservationModule } from './modules/reservation/reservation.module';

@Module({
  imports: [CarModule, AuthModule, ReservationModule],
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
