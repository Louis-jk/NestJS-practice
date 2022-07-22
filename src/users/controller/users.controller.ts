import {
  Body,
  Controller,
  Delete,
  ForbiddenException,
  Get,
  Param,
  Post,
  Put,
  Redirect,
  UseFilters,
} from '@nestjs/common';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { User } from '../interfaces/user.interface';
import { UsersService } from '../service/users.service';
import { User as UserModel } from '@prisma/client';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Post()
  async create(@Body() data: UserModel): Promise<UserModel> {
    return this.userService.createUser(data);
  }

  @Get()
  async findAll() {
    return this.userService.findAllUsers();
  }

  @Get(':id')
  async findUser(@Param('id') id: number) {
    return this.userService.findUser(id);
  }

  // @Put(':id')
  // async modifyUser(@Body())

  @Delete(':id')
  async deleteUser(@Param('id') id: number) {
    return this.userService.deleteUser(id);
  }
}
