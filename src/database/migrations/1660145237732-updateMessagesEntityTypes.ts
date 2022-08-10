import { MigrationInterface, QueryRunner } from 'typeorm';

export class updateMessagesEntityTypes1660145237732
  implements MigrationInterface
{
  name = 'updateMessagesEntityTypes1660145237732';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "messages" DROP COLUMN "receiverId"`);
    await queryRunner.query(
      `ALTER TABLE "messages" ADD "receiverId" integer DEFAULT 0`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "messages" DROP COLUMN "receiverId"`);
    await queryRunner.query(
      `ALTER TABLE "messages" ADD "receiverId" character varying DEFAULT 0`,
    );
  }
}
