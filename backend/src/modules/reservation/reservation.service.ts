import { Injectable } from '@nestjs/common';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { PrismaService } from 'src/database/prisma.service';
import { ResponseDto } from 'src/shared/dto/response.dto';

@Injectable()
export class ReservationService {
  constructor(private prismaService: PrismaService) {}

  async create(
    currentUserId: string,
    createReservationDto: CreateReservationDto,
  ) {
    const reservation = await this.prismaService.reservation.create({
      data: {
        price: createReservationDto.price,
        car_id: createReservationDto.car_id,
        endDate: createReservationDto.endDate,
        startDate: createReservationDto.startDate,
        user_id: currentUserId,
      },
    });

    await this.prismaService.creditCard.create({
      data: {
        cardNumber: createReservationDto.cardNumber,
        cvv: createReservationDto.cvv,
        expiryDate: createReservationDto.expiryDate,
        user_id: currentUserId,
      },
    });

    if (!reservation) {
      return new ResponseDto('Erro ao criar reserva', false);
    }

    return new ResponseDto('Reserva criada com sucesso', true, reservation);
  }

  async findAll(currentUserId: string) {
    const reservations = await this.prismaService.reservation.findMany({
      where: {
        user_id: currentUserId,
      },
      include: {
        car: true,
      },
    });

    if (!reservations) {
      return new ResponseDto('Nenhuma reserva encontrada', false);
    }

    return new ResponseDto('Reservas encontradas', true, reservations);
  }
}
