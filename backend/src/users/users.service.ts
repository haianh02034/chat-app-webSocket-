import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './user.schema';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async create(data: Partial<User>) {
    if (!data.password) {
      throw new Error('Password is required for user creation.');
    }
    const hashedPassword = await bcrypt.hash(data.password, 10); // 10 is the salt rounds
    const user = new this.userModel({ ...data, password: hashedPassword });
    return user.save();
  }

  async findByUsernameOrEmail(usernameOrEmail: string) {
    return this.userModel.findOne({
      $or: [{ username: usernameOrEmail }, { email: usernameOrEmail }],
    });
  }

  async validateUser(usernameOrEmail: string, pass: string): Promise<UserDocument | null> {
    const user = await this.userModel.findOne({
      $or: [{ username: usernameOrEmail }, { email: usernameOrEmail }],
    });
    if (!user) {
      console.log('User not found:', usernameOrEmail);
      return null;
    }

    console.log('Provided password:', pass);
    console.log('Stored hashed password:', user.password);
    const isPasswordValid = await bcrypt.compare(pass, user.password);
    console.log('Password comparison result:', isPasswordValid);

    if (isPasswordValid) {
      return user;
    }
    return null;
  }
}
