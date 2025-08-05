import { Controller, Post, Body, Req, UseGuards, Get } from '@nestjs/common';
import { RoomsService } from './rooms.service';
import { JwtAuthGuard } from '../guards/jwt-auth.guard';
import { CreateRoomDto } from './dto/create-room.dto';

@Controller('rooms')
export class RoomsController {
  constructor(private readonly roomService: RoomsService) {}

  @Post('create')
  @UseGuards(JwtAuthGuard)
  createRoom(@Body() dto: CreateRoomDto, @Req() req) {
    const roomName = dto.name || ''; // Provide a default empty string if name is undefined
    return this.roomService.createRoom(roomName, dto.memberUsernames, req.user.sub);
  }

  @Get('my')
  @UseGuards(JwtAuthGuard)
  getMyRooms(@Req() req) {
    const userId = req.user.sub;
    return this.roomService.findRoomsByUser(userId);
  }
}
