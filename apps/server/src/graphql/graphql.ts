/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class RegisterInput {
  name: string;
  username: string;
}

export abstract class IMutation {
  abstract register(
    input?: Nullable<RegisterInput>,
  ): Nullable<RegisterRes> | Promise<Nullable<RegisterRes>>;
}

export class RegisterRes {
  user: User;
  token: string;
}

export class User {
  id: number;
  name: string;
  username: string;
  avatar?: Nullable<string>;
}

export abstract class IQuery {
  abstract user(id: number): User | Promise<User>;
}

type Nullable<T> = T | null;
