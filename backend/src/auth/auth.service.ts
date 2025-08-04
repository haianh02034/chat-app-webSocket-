import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../users/users.service';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private usersService: UserService
  ) {}

  async login(dto: LoginDto): Promise<string> {
    const user = await this.usersService.validateUser(
      dto.usernameOrEmail,
      dto.password,
    );
    if (!user) throw new UnauthorizedException();

    return this.jwtService.sign({
      sub: user.id,
      username: user.username,
      email: user.email,
    });
  }

  async register(dto: RegisterDto) {
    return this.usersService.create(dto);
  }
}
