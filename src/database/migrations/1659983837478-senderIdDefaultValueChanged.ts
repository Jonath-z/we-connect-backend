import { MigrationInterface, QueryRunner } from 'typeorm';

export class senderIdDefaultValueChanged1659983837478
  implements MigrationInterface
{
  name = 'senderIdDefaultValueChanged1659983837478';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "messages" ADD "isVideo" character varying DEFAULT false`,
    );
    await queryRunner.query(
      `ALTER TABLE "messages" ADD "isImage" character varying DEFAULT false`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "messages" DROP COLUMN "isImage"`);
    await queryRunner.query(`ALTER TABLE "messages" DROP COLUMN "isVideo"`);
  }
}
