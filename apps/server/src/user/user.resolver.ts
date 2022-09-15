import { Injectable, UseGuards } from '@nestjs/common';
import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';

import { CurrentUser } from '@/auth/current-user';
import { GqlAuthGuard } from '@/auth/gql-auth.guard';
import { IAuth } from '@/auth/jwt.strategy';
import { UserService } from './user.service';

@Resolver('User')
@Injectable()
@UseGuards(GqlAuthGuard)
export class UserResolver {
  constructor(private userService: UserService) {}

  @Query('user')
  async getUserInfo(@CurrentUser() auth: IAuth, @Args('id') id: number) {
    return this.userService.getById(id, auth);
  }

  @Query('currentUser')
  async getCurrentUserInfo(@CurrentUser() auth: IAuth) {
    return this.userService.getCurrentUser(auth);
  }
}
