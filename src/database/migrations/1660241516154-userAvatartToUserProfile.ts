import { MigrationInterface, QueryRunner } from 'typeorm';

export class userAvatartToUserProfile1660241516154
  implements MigrationInterface
{
  name = 'userAvatartToUserProfile1660241516154';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "call" RENAME COLUMN "userAvatarUrl" TO "userProfileUrl"`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "call" RENAME COLUMN "userProfileUrl" TO "userAvatarUrl"`,
    );
  }
}
