import { Injectable } from '@nestjs/common';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';
import { PrismaService } from 'src/database/prisma.service';
import { ResponseDto } from 'src/shared/dto/response.dto';

@Injectable()
export class CarService {
  constructor(private prismaService: PrismaService) {}

  async create(createCarDto: CreateCarDto) {
    const car = await this.prismaService.car.create({
      data: {
        brand: createCarDto.brand,
        color: createCarDto.color,
        license_plate: createCarDto.license_plate,
        name: createCarDto.name,
        price: createCarDto.price,
        year: createCarDto.year,
        image: createCarDto.image,
        description: createCarDto.description,
      },
    });

    if (!car) {
      return new ResponseDto('Carro não cadastrado', false);
    }

    return new ResponseDto('Carro cadastrado com sucesso', true, car);
  }

  async findAll() {
    const cars = await this.prismaService.car.findMany();

    if (!cars) {
      return new ResponseDto('Nenhum carro encontrado', false);
    }

    return new ResponseDto('Carros encontrados', true, cars);
  }

  findOne(id: number) {
    return `This action returns a #${id} car`;
  }

  update(id: number, updateCarDto: UpdateCarDto) {
    return `This action updates a #${id} car`;
  }

  async remove(id: string) {
    const car = await this.prismaService.car.delete({
      where: {
        id,
      },
    });

    if (!car) {
      return new ResponseDto('Carro não encontrado', false);
    }

    return new ResponseDto('Carro deletado com sucesso', true, car);
  }
}
