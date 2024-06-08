import { Module } from '@nestjs/common';
import { PrismaService } from './database/prisma.service';
import { CarModule } from './car/car.module';

@Module({
  imports: [CarModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
