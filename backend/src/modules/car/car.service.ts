import { Injectable } from '@nestjs/common';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class CarService {
  constructor(private prismaService: PrismaService) {}

  async create(createCarDto: CreateCarDto) {
    console.log(createCarDto);

    const car = await this.prismaService.car.create({
      data: {
        brand: createCarDto.brand,
        color: createCarDto.color,
        licesnse_plate: createCarDto.licesnse_plate,
        name: createCarDto.name,
        price: createCarDto.price,
        year: createCarDto.year,
      },
    });

    if (!car) {
      return 'Car not created';
    }

    return car;
  }

  findAll() {
    return `This action returns all car`;
  }

  findOne(id: number) {
    return `This action returns a #${id} car`;
  }

  update(id: number, updateCarDto: UpdateCarDto) {
    return `This action updates a #${id} car`;
  }

  remove(id: number) {
    return `This action removes a #${id} car`;
  }
}
