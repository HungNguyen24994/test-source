import { Migration } from '@mikro-orm/migrations';

export class Migration20220915083442 extends Migration {
  async up(): Promise<void> {
    this.addSql(
      'create table "tbl_cmn_users" ("id" serial primary key, "name" varchar(255) null, "username" varchar(255) null, "avatar" varchar(255) null, "created_at" timestamptz(0) not null, "updated_at" timestamptz(0) not null);',
    );
  }

  async down(): Promise<void> {
    this.addSql('drop table if exists "tbl_cmn_users" cascade;');
  }
}
