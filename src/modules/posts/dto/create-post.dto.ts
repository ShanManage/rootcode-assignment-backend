import { IsEnum, IsString } from 'class-validator';

export enum TitleColor {
  BLUE = 'BLUE',
  YELLOW = 'YELLOW',
  RED = 'RED',
}

export class CreatePostDto {
  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsEnum(TitleColor, { message: 'title color must be valid color' })
  titleColor: TitleColor;
}
