import { Injectable } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';

import { RegisterRes as GqlRegisterRes } from '@/graphql/graphql';

import { AuthService } from './auth.service';
import { RegisterDto } from './dto/Register.dto';

@Resolver('Auth')
@Injectable()
export class AuthResolver {
  constructor(private authService: AuthService) {}

  @Mutation('register')
  register(@Args() args: RegisterDto): Promise<GqlRegisterRes> {
    return this.authService.register(args.input);
  }
}
