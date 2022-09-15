import { User } from '@/database/entities/User';
import { User as GqlUser } from '@/graphql/graphql';

const transform = (user: User): GqlUser => {
  const { id, name, username, avatar } = user;
  const data: GqlUser = {
    id,
    name,
    username,
    avatar,
  };

  return data;
};

export { transform };
