// backend/src/app.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import * as cookieParser from 'cookie-parser';
import { ChatGateway } from './chat/chat.gateway';
import { UserSchema, User } from './users/user.schema';
import { RoomSchema, Room } from './rooms/room.schema';
import { MessageSchema, Message } from './messages/message.schema';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ProfileModule } from './profile/profile.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRoot('mongodb://localhost:27017/chatapp'),
    MongooseModule.forFeature([
      { name: User.name, schema: UserSchema },
      { name: Room.name, schema: RoomSchema },
      { name: Message.name, schema: MessageSchema },
    ]),
    UsersModule,
    AuthModule,
    ProfileModule,
  ],
  controllers: [],
  providers: [ChatGateway],
})
export class AppModule {}
