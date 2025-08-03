// backend/src/app.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ChatGateway } from './chat/chat.gateway';
import { UserSchema, User } from './users/user.schema';
import { RoomSchema, Room } from './rooms/room.schema';
import { MessageSchema, Message } from './messages/message.schema';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/chatapp'),
    MongooseModule.forFeature([
      { name: User.name, schema: UserSchema },
      { name: Room.name, schema: RoomSchema },
      { name: Message.name, schema: MessageSchema },
    ]),
  ],
  controllers: [],
  providers: [ChatGateway],
})
export class AppModule {}
