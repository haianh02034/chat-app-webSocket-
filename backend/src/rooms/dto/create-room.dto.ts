import { IsString, IsArray, IsOptional } from 'class-validator';

export class CreateRoomDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsArray()
  @IsString({ each: true })
  members: string[];
}
