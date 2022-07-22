import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateUserDto {
  @IsNumber()
  readonly id?: number;

  @IsString()
  readonly email: string;

  @IsString()
  readonly name: string;

  @IsString()
  readonly phone: string;

  @IsString()
  readonly joined_at: string;

  @IsString()
  readonly leaved_at: string;
}
