import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Room } from './room.schema';
import { User } from '../users/user.schema'; // Import User schema

@Injectable()
export class RoomsService {
  constructor(
    @InjectModel(Room.name) private roomModel: Model<Room>,
    @InjectModel(User.name) private userModel: Model<User>, // Inject User model
  ) {}

  async createRoom(name: string, memberUsernames: string[], creatorId: string) {
    const memberUsers = await this.userModel.find({ username: { $in: memberUsernames } });
    const actualMemberUsers = Array.isArray(memberUsers) ? memberUsers : [];
    const memberIds = actualMemberUsers.map(user => user._id.toString());
    const members = [...new Set([...memberIds, creatorId])];
    const isGroup = members.length > 2; // If more than 2 members (creator + 1 other), it's a group
    const room = new this.roomModel({ name, members, isGroup });
    return room.save();
  }

  async findRoomsByUser(userId: string) {
    return this.roomModel
      .find({ members: userId })
      .populate('members', 'email username');
  }
}
