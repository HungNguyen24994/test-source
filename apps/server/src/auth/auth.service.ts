import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';

import { User } from '@/database/entities/User';
import {
  RegisterInput as GqlRegisterInput,
  RegisterRes as GqlRegisterRes,
} from '@/graphql/graphql';

import { UserService } from '@/user/user.service';
import { InjectRepository } from '@mikro-orm/nestjs';
import { EntityRepository } from '@mikro-orm/postgresql';

@Injectable()
export class AuthService {
  private jwtService: JwtService;

  constructor(
    private readonly configService: ConfigService,
    private userService: UserService,
    @InjectRepository(User)
    private readonly userRepository: EntityRepository<User>,
  ) {
    this.jwtService = new JwtService({
      secret: this.configService.get('jwt.secret'),
    });
  }

  async register(data: GqlRegisterInput): Promise<GqlRegisterRes> {
    const { name, username } = data;

    let user = await this.userRepository.findOne({
      username,
    });

    if (user) {
      throw new Error('User already registered');
    }

    await this.userService.registerUser(user, { name, username });

    const token = this.generateAuthToken(user);
    const userData = await this.userService.getById(user.id);

    return {
      token,
      user: userData,
    };
  }

  generateAuthToken(user: User): string {
    const payload = { sub: user.id };

    return this.jwtService.sign(payload);
  }
}
