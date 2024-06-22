import { Controller, Get, Post, Body } from '@nestjs/common';
import { ReservationService } from './reservation.service';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { CurrentUserId } from 'src/shared/decorators/currentUserId.decorator';

@Controller('reservation')
export class ReservationController {
  constructor(private readonly reservationService: ReservationService) {}

  @Post()
  create(
    @CurrentUserId() currentUserId: string,
    @Body() createReservationDto: CreateReservationDto,
  ) {
    return this.reservationService.create(currentUserId, createReservationDto);
  }

  @Get()
  findAll(@CurrentUserId() currentUserId: string) {
    return this.reservationService.findAll(currentUserId);
  }
}
