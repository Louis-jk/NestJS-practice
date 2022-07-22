import { Injectable } from '@nestjs/common';
// import { User } from './interfaces/user.interface';
import { PrismaService } from 'src/prisma.service';
import { User, Prisma } from '@prisma/client';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  // 유저 찾기
  async findUser(id: number): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: { id: Number(id) },
    });
  }

  // 모든 유저 찾기
  async findAllUsers(): Promise<User[]> {
    return this.prisma.user.findMany({});
  }

  // 유저 등록하기
  async addUser(data: User): Promise<User> {
    return this.prisma.user.create({
      data,
    });
  }

  async createUser(data: Prisma.UserCreateInput): Promise<User> {
    return this.prisma.user.create({
      data,
    });
  }

  async updateUser(params: {
    where: Prisma.UserWhereUniqueInput;
    data: Prisma.UserUpdateInput;
  }): Promise<User> {
    const { where, data } = params;
    return this.prisma.user.update({
      data,
      where,
    });
  }

  async deleteUser(id: number): Promise<User> {
    return this.prisma.user.delete({
      where: { id: Number(id) },
    });
  }
}
