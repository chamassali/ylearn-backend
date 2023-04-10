import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  create(createUserDto: CreateUserDto) {
    const prisma = new PrismaClient();
    return prisma.user.create({
      data: {
        email: createUserDto.email,
        firstname: createUserDto.firstname,
        lastname: createUserDto.lastname,
      },
    });
  }

  findAll() {
    const prisma = new PrismaClient();
    return prisma.user.findMany();
  }

  findOne(id: string) {
    const prisma = new PrismaClient();
    return prisma.user.findUnique({
      where: { id: parseInt(id) },
    });
  }

  async update(id: string, createUserDto: CreateUserDto) {
    const prisma = new PrismaClient();
    try {
      return await prisma.user.update({
        where: { id: parseInt(id) },
        data: {
          email: createUserDto.email,
          firstname: createUserDto.firstname,
          lastname: createUserDto.lastname,
        },
      });
    } catch (error) {
      return error;
    }
  }

  remove(id: string) {
    const prisma = new PrismaClient();
    return prisma.user.delete({
      where: { id: parseInt(id) },
    });
  }
}
