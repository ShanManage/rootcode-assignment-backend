import { IsEnum, IsNotEmpty, IsString } from 'class-validator';

export enum TitleColor {
  BLUE = 'BLUE',
  YELLOW = 'YELLOW',
  RED = 'RED',
}

export class CreatePostDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsEnum(TitleColor, { message: 'title color must be valid color' })
  @IsNotEmpty()
  titleColor: TitleColor;
}
