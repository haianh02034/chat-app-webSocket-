import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Room } from './room.schema';
import { User } from '../users/user.schema'; // Import User schema

@Injectable()
export class RoomsService {
  constructor(
    @InjectModel(Room.name) private roomModel: Model<Room>,
    @InjectModel(User.name) private userModel: Model<User>, // Inject User model
  ) {}

  async createRoom(name: string, memberIds: string[], creatorId: string) {
    const members = [...new Set([...memberIds, creatorId])];
    const room = new this.roomModel({ name, members });
    return room.save();
  }

  async findRoomsByUser(userId: string) {
    return this.roomModel.find({ members: userId }).populate('members', 'email username');
  }
}
