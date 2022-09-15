import {
  Collection,
  Entity,
  Enum,
  ManyToMany,
  PrimaryKey,
  Property,
} from '@mikro-orm/core';

@Entity({
  tableName: 'tbl_cmn_users',
})
export class User {
  @PrimaryKey()
  id!: number;

  @Property({
    nullable: true,
  })
  name: string;

  @Property({
    nullable: true,
  })
  username: string;

  @Property({
    nullable: true,
  })
  avatar: string;

  @Property({
    onCreate: () => new Date(),
  })
  createdAt: Date = new Date();

  @Property({
    onCreate: () => new Date(),
    onUpdate: () => new Date(),
  })
  updatedAt: Date = new Date();
}
