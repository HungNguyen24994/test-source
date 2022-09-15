import {
  ValidateNested,
  IsNotEmpty,
  IsString,
  IsArray,
  IsNumber,
} from 'class-validator';
import { Type } from 'class-transformer';

import { RegisterInput as GqlRegisterInput } from '@/graphql/graphql';

class RegisterData extends GqlRegisterInput {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  username: string;
}

export class RegisterDto {
  @ValidateNested()
  @Type(() => RegisterData)
  input: RegisterData;
}
