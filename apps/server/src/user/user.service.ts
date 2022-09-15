import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@mikro-orm/nestjs';
import { EntityRepository } from '@mikro-orm/postgresql';

import { IAuth } from '@/auth/jwt.strategy';
import { User } from '@/database/entities/User';
import { User as GqlUser } from '@/graphql/graphql';
import { transform } from '@/transformers/user.transformer';

interface IRegisterUserData {
  name: string;
  username: string;
}

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: EntityRepository<User>,
  ) {}

  async registerUser(user: User, data: IRegisterUserData): Promise<User> {
    const { name, username } = data;
    user.name = name;
    user.username = username;

    await this.userRepository.persistAndFlush(user);

    return user;
  }

  async getById(id: number, auth?: IAuth): Promise<GqlUser> {
    const user = await this.userRepository.findOneOrFail(id);

    return transform(user);
  }

  async getCurrentUser(auth: IAuth): Promise<any> {
    const { userId } = auth;
    const user = await this.getById(userId);

    return user;
  }
}
