import { Injectable } from '@nestjs/common';
import { SignupDto } from './dto/signup.dto';
import { PrismaService } from 'src/database/prisma.service';
import { ResponseDto } from 'src/shared/dto/response.dto';
import * as bcrypt from 'bcrypt';
import { SigninDto } from './dto/update-auth.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private prismaService: PrismaService,
    private jwtService: JwtService,
  ) {}

  async signup(signupDto: SignupDto) {
    const { email, name, password, role_id } = signupDto;

    const emailExists = await this.prismaService.user.findUnique({
      where: {
        email,
      },
    });

    if (emailExists) {
      return new ResponseDto('Este email já está em uso', false);
    }

    const saltOrRounds = 12;
    const hashedPassword = await bcrypt.hash(password, saltOrRounds);

    const user = await this.prismaService.user.create({
      data: {
        email,
        name,
        password: hashedPassword,
        role_id,
      },
    });

    if (!user) {
      return new ResponseDto('Erro ao criar usuário', false);
    }

    return new ResponseDto('Usuário criado com sucesso', true);
  }

  async signin(signinDto: SigninDto) {
    const { email, password } = signinDto;

    const user = await this.prismaService.user.findUnique({
      where: {
        email,
      },
    });

    if (!user) {
      return new ResponseDto('Email ou senha incorretos', false);
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return new ResponseDto('Email ou senha incorretos', false);
    }

    const payload = { sub: user.id, name: user.name, role: user.role_id };

    const access_token = await this.jwtService.signAsync(payload);

    return new ResponseDto('Usuário logado com sucesso', true, {
      access_token,
    });
  }

  async user(currentUserId: string) {
    const user = await this.prismaService.user.findUnique({
      where: {
        id: currentUserId,
      },
      select: {
        id: true,
        email: true,
        name: true,
        role_id: true,
      },
    });

    return new ResponseDto('Usuário encontrado com sucesso', true, user);
  }

  async updateUser(currentUserId: string, body: any) {
    const { name, email, password } = body;

    const user = await this.prismaService.user.findUnique({
      where: {
        id: currentUserId,
      },
    });

    if (!user) {
      return new ResponseDto('Usuário não encontrado', false);
    }

    const updateData: any = {};

    if (name) {
      updateData.name = name;
    }

    if (email) {
      updateData.email = email;
    }

    if (password) {
      const saltOrRounds = 12;
      const hashedPassword = await bcrypt.hash(password, saltOrRounds);
      updateData.password = hashedPassword;
    }

    const updatedUser = await this.prismaService.user.update({
      where: {
        id: currentUserId,
      },
      data: updateData,
    });

    return new ResponseDto('Usuário atualizado com sucesso', true, updatedUser);
  }
}
